using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProductController(AppDbContext context)
    {
        _context = context;
    }

    // GET all active products
    [HttpGet]
    public IActionResult GetAll()
    {
        var data = _context.Products
            .Where(p => p.IsActive)
            .ToList();

        return Ok(data);
    }

    // GET by id
    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var p = _context.Products.Find(id);
        if (p == null) return NotFound();

        return Ok(p);
    }

    // POST
    [HttpPost]
    public IActionResult Create(Product p)
    {
        _context.Products.Add(p);
        _context.SaveChanges();

        return Ok(p);
    }

    // PUT
    [HttpPut("{id}")]
    public IActionResult Update(int id, Product p)
    {
        var old = _context.Products.Find(id);
        if (old == null) return NotFound();

        old.Symbol = p.Symbol;
        old.Name = p.Name;
        old.Category = p.Category;
        old.CurrentPrice = p.CurrentPrice;
        old.IsActive = p.IsActive;

        _context.SaveChanges();

        return Ok(old);
    }

    // DELETE (soft delete chuẩn trading)
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        var p = _context.Products.Find(id);
        if (p == null) return NotFound();

        p.IsActive = false; // không xoá thật
        _context.SaveChanges();

        return Ok();
    }
}