namespace API.Models
{
    public class TimeLog
    {
        public string? Date { get; set; }
        public string? EmployeeName { get; set; }
        public string? Customer { get; set; }
        public string? ContactPerson { get; set; }
        public string? Description { get; set; }
        public string? DescriptionInternal { get; set; }
        public string? TimeStart { get; set; }
        public string? TimeStop { get; set; }
        public int? TimeUsedInMinutes { get; set; }
        public string? TimeUsedOutput { get; set; }

    }
}
