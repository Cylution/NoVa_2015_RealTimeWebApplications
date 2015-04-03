using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Newtonsoft.Json;

namespace SignalRDemo.Web.Models
{
    public class MouseMoveCoordinates
    {
        [JsonProperty("x")]
        public string XCoordinate { get; set; }
        [JsonProperty("y")]
        public string YCoordinate { get; set; }
    }
}