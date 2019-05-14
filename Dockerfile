FROM mcr.microsoft.com/dotnet/core/aspnet:3.0.0-preview5
ARG source=./publish
WORKDIR /app
EXPOSE 5000
COPY $source .
ENTRYPOINT ["dotnet", "UniversalRepos.WebSite.dll"]