
namespace BlazorStudentAppUT;

using BlazorStudentApp.Data.Models;


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


    [Fact]
    public void Parameter_Passing_StudentDetailsComponentRender()
    {
        Console.WriteLine("Hello World!");

        // Arrange
        var ctx = new TestContext();

        var heading = "Student Details";

        var student = new Student() { Name = "Raj", Id = 1, Address = "Pune" };

        // Act
        var cut = ctx.RenderComponent<BlazorStudentApp.Pages.Student.DetailsStudent>(p => p
            .Add(p => p.Heading, heading)
            .Add(p => p.SelectedStudent, student));

        Assert.Contains(student.Name, cut.Find(".modal-body h5").TextContent);

        Assert.Contains(@"<h4 class=""modal-title"">" + heading + "</h4>", cut.Markup);

        Assert.Equal(heading, cut.Instance.Heading);
        Assert.Equal(student, cut.Instance.SelectedStudent);
        // Assert.Contains(cut.Markup, student.Name);
        // Assert.Contains(cut.Markup, student.Id.ToString());
        // Assert.Contains(cut.Markup, student.Address);

        // Assert
        // cut.MarkupMatches("<h1>Welcome to our school</h1>\n\rThis is the official page to manage students of our School.");

    }
}
