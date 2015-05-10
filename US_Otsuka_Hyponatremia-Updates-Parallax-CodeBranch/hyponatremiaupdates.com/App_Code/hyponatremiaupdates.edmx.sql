
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 05/07/2015 14:40:14
-- Generated from EDMX file: C:\Users\developer\git\US_Otsuka_Hyponatremia-Updates-Parallax\hyponatremiaupdates.com\App_Code\hyponatremiaupdates.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [hyponatremiaupdates];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[UserProfiles]', 'U') IS NOT NULL
    DROP TABLE [dbo].[UserProfiles];
GO
IF OBJECT_ID(N'[dbo].[Resources]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Resources];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'UserProfiles'
CREATE TABLE [dbo].[UserProfiles] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Email] nvarchar(max)  NOT NULL,
    [FName] nvarchar(max)  NULL,
    [LName] nvarchar(max)  NULL,
    [ProfessionalDesignation] nvarchar(max)  NULL,
    [Specialty] nvarchar(max)  NULL,
    [OtherSpecialty] nvarchar(max)  NULL,
    [EmailUpdates] bit  NOT NULL,
    [ExclusiveContent] bit  NULL,
    [HCPVerificationMethod] nvarchar(max)  NULL,
    [StateLicenseNumber] nvarchar(max)  NULL,
    [StateOfLicensure] nvarchar(max)  NULL,
    [NPINumber] nvarchar(max)  NULL,
    [BusinessAddressLine1] nvarchar(max)  NULL,
    [BusinessAddressLine2] nvarchar(max)  NULL,
    [BusinessAddressCity] nvarchar(max)  NULL,
    [BusinessAddressState] nvarchar(max)  NULL,
    [BusinessAddressZip] nvarchar(max)  NULL,
    [TreatmentQuestionResponse] nvarchar(max)  NULL
);
GO

-- Creating table 'Resources'
CREATE TABLE [dbo].[Resources] (
    [Id] int IDENTITY(1,1) NOT NULL,
    [Title] nvarchar(max)  NOT NULL,
    [FileName] nvarchar(max)  NOT NULL,
    [Content] varbinary(max)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'UserProfiles'
ALTER TABLE [dbo].[UserProfiles]
ADD CONSTRAINT [PK_UserProfiles]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [Id] in table 'Resources'
ALTER TABLE [dbo].[Resources]
ADD CONSTRAINT [PK_Resources]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------