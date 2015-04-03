using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using SignalRDemo.Web.Models;

namespace SignalRDemo.Web.Hubs
{
    public class MouseHub : Hub
    {
        public void Move(MouseMoveCoordinates movement)
        {
            Clients.Others.RegisterMovement(movement);
        }
    }
}