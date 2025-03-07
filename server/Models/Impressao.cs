using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Impressao
    {
        public int Id { get; set; }
        public DateTime DataImpressao { get; set; } = DateTime.Now;
        public string Status { get; set; }
        public string Descricao { get; set; }

        public int ProjetoId { get; set; }
        public Projeto Projeto { get; set; }
    }

}