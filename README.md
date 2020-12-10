# config-file-separation-for-dev-and-prod-environments-


1. To inject n keys (instead of just committing to config file) it becomes very tedious to set all the keys using process environment variables.

2. It becomes a lenghty process to specify all the key directly to JSON. Usage of hierarchical JSON file which is grouped into sections + few config libraries allow to store the configuration in multiple files and to union all at runtime.

3. To store senstive infromation likes password, there are some configuration libraries which will allow us to encrypt files or not store in real value via environmnet variable.

4. Whenever application fails we should get the feedback immediately if the environment variable which is required are not available at start-up. to over come this we can convit to validate the configuration
