namespace backend.Models;

public class Product
{
    public int ProductId { get; set; }
    public string Symbol { get; set; } = string.Empty;
    public string Name { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty; 
    public decimal CurrentPrice { get; set; }
    public bool IsActive { get; set; } = true;
}