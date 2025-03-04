using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("test")]
public class HelloController : ControllerBase
{
    [HttpGet]
    public IActionResult GetMessage()
    {
        return Ok(new { message = "Hello from MVC API!" });
    }
}
