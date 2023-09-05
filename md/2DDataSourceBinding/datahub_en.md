# SaaS Composer Binding DataHub Data Source 
**To connect the SaaS Composer to DataHub data, you need to set the URL pairing in The Management page.**

**Connect to the portal-DataHub App:**


![jrb09-yi7ck.gif](datahub.gif)


1. To enter SaaS Composer Management, the Organization needs to be set and select the data source Tab page afterwards.
Click the Add Data Source button to open the configuration window for adding the data source.
2. Set the custom data source name and choose the type of the data source to add; select “**Datahub datasource**” here.
(**Notice: If datahub's version is 2.0.12, please select “Datahub v1”**)
3. Fill in the URL of the DataHub data source portal to be connected in the URL option in the HTTP entry, and add “https://” to the front and “api/v1/SimpleJsons” to the end.

4. Access options are set via proxy or direct access; select direct for DataHub SimpleJson.
Check the With Credentialsx option in the Auth item,Or enter EnSaaS account password.
5. Click Save.


