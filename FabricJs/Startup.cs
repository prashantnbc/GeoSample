using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FabricJs.Startup))]
namespace FabricJs
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
