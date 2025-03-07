using Microsoft.EntityFrameworkCore;
using server.Models;

namespace server.Data{

    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Projeto> Projetos { get; set; }
        public DbSet<Impressao> Impressoes { get; set; }
        public DbSet<Estoque> Estoques { get; set; }
        
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Usuario>()
                .HasMany(u => u.Projetos)
                .WithOne(p => p.Responsavel)
                .HasForeignKey(p => p.ResponsavelId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Projeto>()
                .HasMany(p => p.Impressoes)
                .WithOne(i => i.Projeto)
                .HasForeignKey(i => i.ProjetoId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Usuario>()
                .HasCheckConstraint("CK_Usuario_Tipo", "TipoUsuario IN ('comum', 'administrador')");

            modelBuilder.Entity<Impressao>()
                .HasCheckConstraint("CK_Impressao_Status", "status IN ('Em andamento', 'Concluído', 'Erro')");           
        }
    }

}