namespace WebApplication1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Countries",
                c => new
                    {
                        CountryName = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => t.CountryName);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserId = c.Int(nullable: false, identity: true),
                        UserName = c.String(nullable: false),
                        Password = c.String(nullable: false),
                        Role = c.String(nullable: false),
                        FName = c.String(nullable: false),
                        LName = c.String(nullable: false),
                        Age = c.Int(nullable: false),
                        Country = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Users");
            DropTable("dbo.Countries");
        }
    }
}
