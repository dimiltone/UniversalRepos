using System;
using System.Collections.Generic;

namespace UniversalRepos.Datas.Exceptions
{
    [Serializable]
    public class ValidationError
    {
        public string Property { get; set; }

        public IEnumerable<CustomError> Errors { get; set; }
    }

    [Serializable]
    public class CustomError : IEquatable<CustomError>
    {
        public string ErrorCode { get; set; }

        public string Error { get; set; }
        public override bool Equals(object obj)
        {
            if( ReferenceEquals(null, obj) ) return false;
            if( ReferenceEquals(this, obj) ) return true;
            if( obj.GetType() != this.GetType() ) return false;
            return Equals((CustomError) obj);
        }

        public CustomError(string errorCode, string error)
        {
            this.ErrorCode = errorCode;
            this.Error = error;
        }

        public bool Equals(CustomError other)
        {
            if( ReferenceEquals(null, other) ) return false;
            if( ReferenceEquals(this, other) ) return true;
            return string.Equals(ErrorCode, other.ErrorCode) && string.Equals(Error, other.Error);
        }

        public override int GetHashCode()
        {
            unchecked
            {
                return ((ErrorCode != null ? ErrorCode.GetHashCode() : 0) * 397) ^ (Error != null ? Error.GetHashCode() : 0);
            }
        }
    }
}
