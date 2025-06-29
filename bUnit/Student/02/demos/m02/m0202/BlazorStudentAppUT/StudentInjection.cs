namespace BlazorStudentAppUT;

using Moq;
using Bunit;
using BlazorStudentApp.Data.Models;
using BlazorStudentApp.Data.Services;
using Microsoft.Extensions.DependencyInjection;

public class StudentServiceInjection
{


    [Fact]
    public void Service_Injection_StudentsAllRendered_Test()
    {
        List<Student> students = new List<Student>()
        {
            new Student() { Name = "Raj", Id = 1, Address = "Pune" },
            new Student() { Name = "Ram Raj", Id = 2, Address = "Pune" },

        };


        var studentServiceMock = new Mock<IStudentsService>();
        studentServiceMock.Setup(x => x.GetStudentsAsync()).ReturnsAsync(students);

        var ctx = new TestContext();
        ctx.Services.AddScoped(p => studentServiceMock.Object);

        // ctx.Services.AddSingleton<IStudentsService>(studentServiceMock.Object);

        var cut = ctx.RenderComponent<BlazorStudentApp.Pages.Student.AllStudents>();


        // Assert
        Assert.Equal(students.Count, cut.FindAll("tr").Count -1); // header

        Assert.Equal(students.Count, cut.Instance.students.Count);
    }

}