using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{

public class Usuario
{
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string TipoUsuario { get; set; }

        public ICollection<Projeto> Projetos { get; set; } = new List<Projeto>();
    }

}