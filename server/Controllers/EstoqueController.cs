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
    public class EstoqueController : ControllerBase
    {
        private readonly AppDbContext _context;

        public EstoqueController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Estoque>>> GetEstoques()
        {
            return await _context.Estoques.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Estoque>> GetEstoque(int id)
        {
            var estoque = await _context.Estoques.FindAsync(id);

            if (estoque == null)
            {
                return NotFound();
            }

            return estoque;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutEstoque(int id, Estoque estoque)
        {
            if (id != estoque.Id)
            {
                return BadRequest();
            }

            _context.Entry(estoque).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EstoqueExists(id))
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
        public async Task<ActionResult<Estoque>> PostEstoque(Estoque estoque)
        {
            _context.Estoques.Add(estoque);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEstoque", new { id = estoque.Id }, estoque);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Estoque>> DeleteEstoque(int id)
        {
            var estoque = await _context.Estoques.FindAsync(id);
            if (estoque == null)
            {
                return NotFound();
            }

            _context.Estoques.Remove(estoque);
            await _context.SaveChangesAsync();

            return estoque;
        }

        private bool EstoqueExists(int id)
        {
            return _context.Estoques.Any(e => e.Id == id);
        }
    }
}
