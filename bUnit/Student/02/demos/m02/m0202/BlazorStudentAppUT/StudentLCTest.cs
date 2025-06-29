namespace BlazorStudentAppUT;

using Moq;
using Bunit;
using BlazorStudentApp.Data.Models;
using BlazorStudentApp.Data.Services;
using Microsoft.Extensions.DependencyInjection;


public class StudentLCTest
{
    [Fact]
    public void Render_ShouldSucceed_NewStudentComponent_Test()
    {
        List<Student> students = new List<Student>()
        {
            new Student() { Name = "Raj", Id = 1, Address = "Pune" },
            new Student() { Name = "Ram Raj", Id = 2, Address = "Pune" },

        };

        Student student = new Student() { Name = "Yash", Id = 1, Address = "Blr" };


        var studentServiceMock = new Mock<IStudentsService>();
        studentServiceMock.Setup(x => x.GetStudentsAsync()).ReturnsAsync(students);
        studentServiceMock.Setup(o => o.AddStudentAsync(It.IsAny<Student>())).ReturnsAsync(student);

        var ctx = new TestContext();
        ctx.Services.AddScoped(p => studentServiceMock.Object);

        // ctx.Services.AddSingleton<IStudentsService>(studentServiceMock.Object);

        var cut = ctx.RenderComponent<BlazorStudentApp.Pages.Student.NewStudent>();

        cut.Render();
        cut.Render();

        // Assert.Equal(student, cut.Instance.student);
        // Assert.Equal("Yash", cut.Instance.studentName);
        // Assert.Contains($"""Student Yash added to the database. Fill in the form to add another student.""", cut.Markup);
        Assert.Equal(3, cut.RenderCount);
    }

    [Fact]
    public void AsyncAwait_ShouldSucceed_IndexComponent_Test()
    {
        var str = "Hello World - BUnit!";
        var ctx = new TestContext();
        var textService = new TaskCompletionSource<string>();

        var cut = ctx.RenderComponent<BlazorStudentApp.Pages.Index>(
            p => p.Add(p => p.TextService, textService.Task)
        );

        textService.SetResult(str);
        cut.WaitForState(() => cut.Find("h6").TextContent == str);

        Assert.Contains($"""<h6>{str}</h6>""", cut.Markup);
    }

    [Fact]
    public void Exception__NewStudentComponent_Test()
    {
        List<Student> students = new List<Student>()
        {
            new Student() { Name = "Raj", Id = 1, Address = "Pune" },
            new Student() { Name = "Ram Raj", Id = 2, Address = "Pune" },

        };

        Student student = new Student() { Name = "Yash", Id = 1, Address = "Blr" };


        var studentServiceMock = new Mock<IStudentsService>();
        studentServiceMock.Setup(x => x.GetStudentsAsync()).ReturnsAsync(students);
        studentServiceMock.Setup(o => o.AddStudentAsync(It.IsAny<Student>())).ReturnsAsync(student);

        var ctx = new TestContext();
        ctx.Services.AddScoped(p => studentServiceMock.Object);
        var cut = ctx.RenderComponent<BlazorStudentApp.Pages.Student.NewStudent>();

        cut.Find("input[id=\"name\"]").Change("Yash");
        cut.Find("input[id=\"address\"]").Change("Blr");
        cut.Find("input[id=\"email\"]").Change("1@craft.com");
        cut.Find("input[id=\"phone\"]").Change("+91 1234567890");
        // var submitBtn = cut.Find("button[type=\"submitnotfound\"]");
        // submitBtn.Click();


        // Act
        // Assert
        Assert.Throws<Bunit.ElementNotFoundException>(() => cut.Find("button[type=\"submitnotfound\"]"));

        // Assert.Equal(student, cut.Instance.student);
        // Assert.Equal("Yash", cut.Instance.studentName);
        // Assert.Contains($"""Student Yash added to the database. Fill in the form to add another student.""", cut.Markup);
        // Assert.True(cut.Instance.isSuccessMessageVisible);
    }
    
    [Fact]
    public void ExceptionElementNF_NewStudentComponent_Test()
    {
        List<Student> students = new List<Student>()
        {
            new Student() { Name = "Raj", Id = 1, Address = "Pune" },
            new Student() { Name = "Ram Raj", Id = 2, Address = "Pune" },

        };

        Student student = new Student() { Name = "Yash", Id = 1, Address = "Blr" };

        var studentServiceMock = new Mock<IStudentsService>();
        studentServiceMock.Setup(x => x.GetStudentsAsync()).ReturnsAsync(students);
        studentServiceMock.Setup(o => o.AddStudentAsync(It.IsAny<Student>())).ReturnsAsync(student);

        var ctx = new TestContext();
        ctx.Services.AddScoped(p => studentServiceMock.Object);
        var cut = ctx.RenderComponent<BlazorStudentApp.Pages.Student.NewStudent>();

        cut.Find("input[id=\"name\"]").Change("Yash");
        cut.Find("input[id=\"address\"]").Change("Blr");
        cut.Find("input[id=\"email\"]").Change("1@craft.com");
        cut.Find("input[id=\"phone\"]").Change("+91 1234567890");

        var h1Btn = cut.Find("h1");

        // Act
        // Assert
        Assert.Throws<Bunit.MissingEventHandlerException>(() => h1Btn.Click());

        // Assert.Equal(student, cut.Instance.student);
        // Assert.Equal("Yash", cut.Instance.studentName);
        // Assert.Contains($"""Student Yash added to the database. Fill in the form to add another student.""", cut.Markup);
        // Assert.True(cut.Instance.isSuccessMessageVisible);
    }


}