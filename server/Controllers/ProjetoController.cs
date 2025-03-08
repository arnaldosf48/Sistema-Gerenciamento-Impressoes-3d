using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjetosController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProjetosController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Projeto>>> GetProjetos()
        {
            return await _context.Projetos.Include(p => p.Responsavel).Include(p => p.Impressoes).ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Projeto>> GetProjeto(int id)
        {
            var projeto = await _context.Projetos.Include(p => p.Responsavel).Include(p => p.Impressoes).FirstOrDefaultAsync(p => p.Id == id);

            if (projeto == null)
            {
                return NotFound();
            }

            return projeto;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutProjeto(int id, Projeto projeto)
        {
            if (id != projeto.Id)
            {
                return BadRequest();
            }

            _context.Entry(projeto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjetoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Projeto>> PostProjeto(Projeto projeto)
        {
            _context.Projetos.Add(projeto);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetProjeto", new { id = projeto.Id }, projeto);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Projeto>> DeleteProjeto(int id)
        {
            var projeto = await _context.Projetos.FindAsync(id);
            if (projeto == null)
            {
                return NotFound();
            }

            _context.Projetos.Remove(projeto);
            await _context.SaveChangesAsync();

            return projeto;
        }

        private bool ProjetoExists(int id)
        {
            return _context.Projetos.Any(e => e.Id == id);
        }
    }
}
