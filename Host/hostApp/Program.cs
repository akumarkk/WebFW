using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

public class Program
{
    public static async Task Main(string[] args)
    {
        using IHost host = CreateHostBuilder(args).Build();

        // Get services from the host and run your application logic
        var myService = host.Services.GetRequiredService<IMyService>();
        await myService.DoSomethingAsync();

        await host.RunAsync(); // Keeps the application running until a shutdown signal is received
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureServices((hostContext, services) =>
            {
                // Register your application's services here
                services.AddTransient<IMyService, MyService>();
                services.AddHostedService<MyBackgroundService>(); // Example of a background task

                // Configure logging
                services.AddLogging(builder =>
                {
                    builder.AddConsole();
                    // Add other logging providers if needed (e.g., file, Seq)
                });
                
                // Configure other application-specific settings
                // hostContext.Configuration can be used to access configuration
            });
}

public interface IMyService
{
    Task DoSomethingAsync();
}

public class MyService : IMyService
{
    private readonly ILogger<MyService> _logger;

    public MyService(ILogger<MyService> logger)
    {
        _logger = logger;
    }

    public async Task DoSomethingAsync()
    {
        _logger.LogInformation("MyService is doing something...");
        await Task.Delay(1000);
        _logger.LogInformation("MyService finished doing something.");
    }
}

public class MyBackgroundService : BackgroundService
{
    private readonly ILogger<MyBackgroundService> _logger;

    public MyBackgroundService(ILogger<MyBackgroundService> logger)
    {
        _logger = logger;
    }

    protected override async Task ExecuteAsync(CancellationToken stoppingToken)
    {
        while (!stoppingToken.IsCancellationRequested)
        {
            _logger.LogInformation("Background service is running at: {time}", DateTimeOffset.Now);
            await Task.Delay(5000, stoppingToken);
        }
    }
}