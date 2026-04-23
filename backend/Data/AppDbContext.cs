using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

    public DbSet<Product> Products { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Product>(entity =>
        {
            entity.ToTable("products");

            entity.HasKey(e => e.ProductId);

            entity.Property(e => e.ProductId)
                .HasColumnName("product_id");

            entity.Property(e => e.Symbol)
                .HasColumnName("symbol");

            entity.Property(e => e.Name)
                .HasColumnName("name");

            entity.Property(e => e.Category)
                .HasColumnName("category");

            entity.Property(e => e.CurrentPrice)
                .HasColumnName("current_price");

            entity.Property(e => e.IsActive)
                .HasColumnName("is_active");
        });
    }
}