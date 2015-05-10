using System.Web.Http;
using AppatureNexus;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.IO;
using System.Net;
using System.Web;
using System;

//[MediaAccess] //MediaAccessAttribute inherits from AuthorizeAttribute to institute custom access restrictions/routing
[RoutePrefix("api/media")]
public class MediaController : ApiController
{
    // GET api/<controller>
    [Route("")]
    public IEnumerable<string> Get()
    {
        return new string[] { "value1", "value2" };
    }

    // GET api/<controller>/5
    [Route("{id:int}")]
    public HttpResponseMessage Get(int id)
    {
        /*try
        {
            string strURL = "~\\TestFileDownload.txt";
            WebClient req = new WebClient();
            HttpResponse response = HttpContext.Current.Response;
            response.Clear();
            response.ClearContent();
            response.ClearHeaders();
            response.Buffer = true;
            response.AddHeader("Content-Disposition", "attachment;filename=" + Path.GetFileName(HttpContext.Current.Server.MapPath(strURL)));
            byte[] data = req.DownloadData(HttpContext.Current.Server.MapPath(strURL));
            response.BinaryWrite(data);
            response.End();

        }
        catch (Exception ex)
        {
        }*/

        using (var dbContext = new hyponatremiaupdatesContainer())
        {
            var resource = dbContext.Resources.Find(id);
            var buffer = new MemoryStream(resource.Content);

            var result = new HttpResponseMessage(HttpStatusCode.OK);
            result.Content = new StreamContent(buffer);

            var contentDisposition = new ContentDispositionHeaderValue("attachment");
            contentDisposition.FileName = resource.FileName;
            result.Content.Headers.ContentDisposition = contentDisposition;
            result.Content.Headers.ContentLength = resource.Content.Length;
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
            return result;
        }
    }

    //THE FOLLOWING IS UNLIKELY TO BE NECESSARY
    //uncomment and implement as needed
    /*
    // POST api/<controller>
    public void Post([FromBody]string value)
    {
    }

    // PUT api/<controller>/5
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE api/<controller>/5
    public void Delete(int id)
    {
    }
    */
}

