using System;
using System.Runtime.Serialization;

namespace UniversalRepos.Datas.Exceptions
{
    /// <summary>
    /// Exception provoqué si un contenu n'existe pas (ex: critere de recherche abs, etc)
    /// </summary>
    [Serializable]
    public class NoContentException : Exception
    {
        protected NoContentException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }

        public NoContentException(string message) : base(message)
        {
            
        }
    }
}
