using API.Models;

namespace API.DAL
{
    public class DBManager
    {
        private readonly IConfiguration configuration;
        private readonly string connectionString;
        public static List<TimeLog> _TimeLogs { get; set; }//Storing the timeLogs instead of using a DB


        //No DB Connected But manager added, to be used if the time allows it to be created.
        public DBManager(IConfiguration _configuration)
        {
            this.configuration = _configuration;
            connectionString = configuration.GetConnectionString("DBContext");
            _TimeLogs = new List<TimeLog>();
        }


        /// <summary>
        /// Send data to DB
        /// </summary>
        internal void SendLogsToDB()
        {
            //Not implemented
        }


        /// <summary>
        /// //Getting data from DB
        /// </summary>
        /// <returns TimeLogs></returns>
        internal List<TimeLog> GetTimeLogsFromDB()
        {
            //Not implemented
            return _TimeLogs;
        }

    }
}
