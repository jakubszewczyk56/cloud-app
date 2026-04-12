using Azure.Identity;
using CloudAppBackend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

var dbConnectionString = "Server=tcp:cloud-app-server-123.database.windows.net,1433;Initial Catalog=cloud-db;Persist Security Info=False;User ID=CloudSAb305cfcb;Password=CloudTask123!Azure;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(
        dbConnectionString,
        sqlOptions => sqlOptions.EnableRetryOnFailure()
    )
);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseSwagger();
app.UseSwaggerUI();

app.MapControllers();

app.MapFallbackToFile("index.html");

app.Run();