using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using API.Models;
using API.DAL;
using System.Text.Json;

namespace API.Controllers
{
    [ApiController]
    
    public class TimeLogController : ControllerBase
    {
        //List to keep the logs, ad DB is not available
        private static List<TimeLog> TimeLogs = new();

        //Preparation for DB connection (Not implementet)
        private readonly IConfiguration configuration;
        private DBManager _dbManager;
        public TimeLogController(IConfiguration config)
        {
            configuration = config;
            _dbManager = new DBManager(configuration);
        }



        /// <summary>
        /// Method to post timelogs to the list
        /// </summary>
        /// <returns _dbManager.TimeLogs></returns>
        [Route("Get/TimeLogs")]
        [HttpGet]
        public IActionResult GetTimeLogs()
        {
            try
            {
                return Ok(TimeLogs);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Could not get time logs\n{ex.Message}");
            }
        }



        /// <summary>
        /// Method to post timelogs to the list
        /// </summary>
        /// <param name="timeLog"></param>
        /// <returns _dbManager.TimeLogs></returns>
        [Route("Post/TimeLogs")]
        [HttpPost]
        public IActionResult PostTimeLogs([FromBody]TimeLog timeLog)
        {
            try
            {
                TimeLogs.Add(timeLog);
                return Ok(TimeLogs);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"The timelog could not be saved\n{ex.Message}");
            }
        }
    }
}
