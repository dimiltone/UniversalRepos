﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using UniversalRepos.Datas;

namespace UniversalRepos.WebSite.Migrations
{
    [DbContext(typeof(AllReposContext))]
    [Migration("20190427163205_initial")]
    partial class initial
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.0-preview4.19216.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("AllRepos.Shared.StorageEntities.RepositoryTypeStorageEntity", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnName("rty_id")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnName("rty_description")
                        .HasMaxLength(512);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnName("rty_name")
                        .HasMaxLength(255);

                    b.HasKey("Id");

                    b.ToTable("TBL_REPO_TYPE");
                });
#pragma warning restore 612, 618
        }
    }
}