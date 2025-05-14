using System;
using System.Threading;
using System.Windows;
using System.Windows.Controls;

namespace ConsoleAppWithWpfCore
{
    class Program
    {
        [STAThread]
        static void Main(string[] args)
        {
            Thread thread = new Thread(() =>
            {
                // Create a new WPF Window
                Window wpfWindow = new Window();
                wpfWindow.Title = "WPF Core from Console!";
                wpfWindow.Width = 300;
                wpfWindow.Height = 200;

                // Add a simple TextBlock (optional)
                TextBlock textBlock = new TextBlock();
                textBlock.Text = "Hello from WPF Core in Console!";
                wpfWindow.Content = textBlock;
                // Show the WPF window
                wpfWindow.ShowDialog(); // Use Show() for non-modal
            });

            thread.SetApartmentState(ApartmentState.STA); // Important for WPF
            thread.Start();
            thread.Join(); // Wait for the WPF thread to finish if ShowDialog was used

            Console.WriteLine("WPF Core window closed. Press any key to exit.");
            Console.ReadKey();
        }
    }
}