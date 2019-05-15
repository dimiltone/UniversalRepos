FROM mcr.microsoft.com/dotnet/core/aspnet:3.0.0-preview5
ARG source=.
WORKDIR /app
EXPOSE 5000
COPY $source .
RUN dotnet publish -o publish

ENTRYPOINT ["dotnet", "./publish/UniversalRepos.WebSite.dll"]