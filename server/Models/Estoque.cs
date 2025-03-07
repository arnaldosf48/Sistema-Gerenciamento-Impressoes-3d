using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
   public class Estoque
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Material { get; set; }
        public int Quantidade { get; set; }
    }

}