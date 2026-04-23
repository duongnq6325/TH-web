using backend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// =======================
// ADD SERVICES
// =======================

// Controller
builder.Services.AddControllers();

// Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Database (EF Core)
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("DefaultConnection")
    )
);

// CORS (cho React gọi API)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy => policy.AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
});

var app = builder.Build();

// =======================
// MIDDLEWARE
// =======================

// Swagger
app.UseSwagger();
app.UseSwaggerUI();

// CORS
app.UseCors("AllowAll");

// app.UseHttpsRedirection();

app.UseAuthorization();

// =======================
// ROUTES
// =======================

// Controller routes
app.MapControllers();

// test root (tránh 404)
app.MapGet("/", () => "Backend API is running 🚀");

// =======================

app.Run();