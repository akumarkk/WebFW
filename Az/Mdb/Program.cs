namespace Program;

using System;
using Microsoft.Data.SqlClient; // This is the namespace for the SQL client
using System.Threading.Tasks;
using System.Globalization;

public class Program
{
    private const string SqlServerName = "your-sql-server-name.database.windows.net";
    private const string SqlDatabaseName = "your-database-name";
    private const string SqlUsername = "your-sql-username";
    private const string SqlPassword = "your-sql-password";

    public static async Task Main()
    {
        Console.WriteLine("hello");

        // Build the connection string
        SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
        builder.DataSource = "";
        builder.UserID = "";
        builder.Password = "";
        builder.InitialCatalog = "sqldb";
        builder.Encrypt = true;             // Always encrypt for Azure SQL Database
        builder.TrustServerCertificate = false; // Important for production; only set true for dev/test with self-signed certs you explicitly trust
        builder.HostNameInCertificate = "*.database.windows.net"; // Added for more robust hostname verification
        builder.MultipleActiveResultSets = false; // Good practice, if you need MARS set to true
        builder.ConnectTimeout = 30; // Connection timeout in seconds

        string createTableSql = @"
            CREATE TABLE Products (
                ProductId INT PRIMARY KEY IDENTITY(1,1),
                ProductName NVARCHAR(255) NOT NULL,
                Price DECIMAL(10, 2),
                DateAdded DATETIME DEFAULT GETDATE()
            );";

        string connectionString = builder.ConnectionString;
        Console.WriteLine($"connectionString {connectionString}");

        try
        {
            Console.WriteLine("Connecting to Azure SQL Database...");

            using (SqlConnection connection = new SqlConnection("Server=tcp:sadblf.database.windows.net,1433;Initial Catalog=sqldb;Persist Security Info=False;User ID=adminsa;Password=Gre@2025;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"))
            {
                await connection.OpenAsync();
                Console.WriteLine("Successfully connected to Azure SQL Database!");

                using (SqlCommand command = new SqlCommand(createTableSql, connection))
                {
                    command.ExecuteNonQuery();
                    Console.WriteLine("Table 'Products' created successfully.");
                }

                string insertSql = @"
            INSERT INTO Products (ProductName, Price)
            VALUES (@ProductName, @Price);";

                using (SqlCommand command = new SqlCommand(insertSql, connection))
                {
                    // Add parameters to the command
                    command.Parameters.AddWithValue("@ProductName", "Aveva SP");
                    command.Parameters.AddWithValue("@Price", 10000);

                    int rowsAffected = command.ExecuteNonQuery();
                    Console.WriteLine($"{rowsAffected} row(s) inserted successfully into 'Products' table.");
                }

            

            }
        }
        catch (SqlException ex)
        {
            Console.WriteLine($"SQL Error: {ex.Message}");
            // For more detailed error, check ex.Number, ex.Errors, etc.
        }
        catch (Exception ex)
        {
            Console.WriteLine($"General Error: {ex.Message}");
        }

        Console.WriteLine("\nPress any key to exit.");
        Console.ReadKey();
    }
}