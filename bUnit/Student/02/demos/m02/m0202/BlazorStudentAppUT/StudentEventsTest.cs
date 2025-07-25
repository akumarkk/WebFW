namespace BlazorStudentAppUT;


using Moq;
using Bunit;
using BlazorStudentApp.Data.Models;
using BlazorStudentApp.Data.Services;
using Microsoft.Extensions.DependencyInjection;

public class StudentEventsTest
{

    [Fact]
    public void SubmitEvent_ShouldFail_NewStudentComponent_Test()
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

        var submitBtn = cut.Find("button[type=\"submit\"]");
        submitBtn.Click();

        // Assert.Equal(student, cut.Instance.student);
        // Assert.Equal("Yash", cut.Instance.studentName);
        Assert.Contains("""<div class="validation-message">The Name field is required.</div>""", cut.Markup);
        Assert.False(cut.Instance.isSuccessMessageVisible);
    }

    [Fact]
    public void SubmitEvent_ShouldSucceed_NewStudentComponent_Test()
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

        cut.Find("input[id=\"name\"]").Change("Yash");
        cut.Find("input[id=\"address\"]").Change("Blr");
        cut.Find("input[id=\"email\"]").Change("1@craft.com");
        cut.Find("input[id=\"phone\"]").Change("+91 1234567890");
        var submitBtn = cut.Find("button[type=\"submit\"]");
        submitBtn.Click();

        // Assert.Equal(student, cut.Instance.student);
        // Assert.Equal("Yash", cut.Instance.studentName);
        Assert.Contains($"""Student Yash added to the database. Fill in the form to add another student.""", cut.Markup);
        Assert.True(cut.Instance.isSuccessMessageVisible);
    }

}