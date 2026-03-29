using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace CloudAppBackend.Data
{
    public class AppDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
    {
        public AppDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();

            optionsBuilder.UseSqlServer(
                "Server=tcp:cloud-app-server-123.database.windows.net,1433;Initial Catalog=cloud-db;Persist Security Info=False;User ID=CloudSAb305cfcb;Password=admin123!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;",
                sqlOptions => sqlOptions.EnableRetryOnFailure()
            );

            return new AppDbContext(optionsBuilder.Options);
        }
    }
}