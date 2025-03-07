using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Projeto 
    {
    public int Id { get; set; }
    public string Nome { get; set; }
    public string Descricao { get; set; }
    public DateTime DataCriacao { get; set; } = DateTime.Now;

    public int ResponsavelId { get; set; }
    public Usuario Responsavel { get; set; }

    public ICollection<Impressao> Impressoes { get; set; } = new List<Impressao>();
    }

}