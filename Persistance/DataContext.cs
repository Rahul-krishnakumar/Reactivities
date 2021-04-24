using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistance
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

    // Create a database context with the Activity class as the model for the table Activities.
        public DbSet<Activity> Activities { get; set; }
    }
}