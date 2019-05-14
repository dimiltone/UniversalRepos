using System;
using System.IO;
using System.Net.Http;
using System.Xml.Serialization;
using Newtonsoft.Json;
using RestEase;

namespace UniversalRepos.Datas.Repositories
{
public class RepositoryResponseDeserializer : ResponseDeserializer
{
    private T DeserializeXml<T>(string content)
    {
        // Consider caching generated XmlSerializers
        var serializer = new XmlSerializer(typeof(T));

        using (var stringReader = new StringReader(content))
        {
            return (T)serializer.Deserialize(stringReader);
        }
    }

    private T DeserializeJson<T>(string content)
    {
        return JsonConvert.DeserializeObject<T>(content);
    }

    public override T Deserialize<T>(string content, HttpResponseMessage response, ResponseDeserializerInfo info)
    {
        switch (response.Content.Headers.ContentType.MediaType)
        {
            case "application/json":
                return DeserializeJson<T>(content);
            case "application/xml":
            case "application/atom+xml":
                return DeserializeXml<T>(content);
        }

        throw new ArgumentException("Response was not JSON or XML");
    }
}
}
