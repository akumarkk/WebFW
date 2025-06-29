
namespace BlazorStudentAppUT;


using Bunit;
using BlazorStudentApp;

public class UnitTest1
{
    [Fact]
    public void Basic_MarkUp_IndexComponentRender()
    {
        Console.WriteLine("Hello World!");

        // Arrange
        var ctx = new TestContext();

        // Act
        var cut = ctx.RenderComponent<BlazorStudentApp.Pages.Index>();

        // Assert
        cut.MarkupMatches("<h1>Welcome to our school</h1>\n\rThis is the official page to manage students of our School.");

    }

    [Fact]
    public void Basic_MarkUp_IndexComponentRenderNode()
    {
        Console.WriteLine("Hello World!");

        // Arrange
        var ctx = new TestContext();

        // Act
        var cut = ctx.RenderComponent<BlazorStudentApp.Pages.Index>();

        // Assert
        var h1Ele = cut.Find("h1");
        h1Ele.MarkupMatches("<h1>Welcome to our school</h1>");

    }
}
