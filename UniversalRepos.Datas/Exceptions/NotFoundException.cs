using System;
using System.Runtime.Serialization;

namespace UniversalRepos.Datas.Exceptions
{
    /// <summary>
    /// Exception representant une resource n'existant pas
    /// </summary>
    [Serializable]
    public class NotFoundException : Exception
    {

        protected NotFoundException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }

        public NotFoundException(string message) : base(message)
        {

        }
    }
}
