namespace POC.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class hell : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.UserDetails", "countryId", c => c.Int(nullable: false));
            DropColumn("dbo.UserDetails", "cId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.UserDetails", "cId", c => c.Int(nullable: false));
            DropColumn("dbo.UserDetails", "countryId");
        }
    }
}
