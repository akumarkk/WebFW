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

}