using API.Controllers;
string? AllowedSpecificOrigins = "_allowedSpecificOrigins";

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.


//Ensuring that the API can be reached from from outside localhost by using Cors
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowedSpecificOrigins,
        builder =>
        {
            builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin();
            //builder.AllowAnyHeader().AllowAnyMethod().WithOrigins(new string[] { "127.0.0.1", "localhost", "timetracker.dk", "https://timetracker.dk" });
        });
});


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//Use cors
app.UseCors(AllowedSpecificOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
