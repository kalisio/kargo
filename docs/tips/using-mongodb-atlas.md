# Using MongoDB Atlas

In a critical operational context, it can be safer to rely on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) than on your own instance of MongoDB.

To use **MongoDB Atlas** with **Kargo**, there are few things to do:

1. Create your cluster on **MongoDB Atlas**
   
2. Enables the connection from **Kargo** to your cluster. On **AWS** the best practice is to enable a peering connection between your **Kargo** VPC and your cluster VPC. See the [documentation](https://docs.atlas.mongodb.com/security-vpc-peering/) for the detail procedure.
   
3. Configure the services in **Kargo** to use **MongoDB Atlas**. 

The tricky thing is that you will need to configure the services with the appropriate connection string. Indeed, the connection string provided by **MongoDB Atlas** is dependent from the MongoDB driver you use and for now **Krawler** based jobs are using the version 3 of the MongoDB driver while **KDK** based applications are using the version 2.

In your `.env` file: 

* declare the following variables, with the connections strings provided by MongoDB Atlas:

```bash
MONGO_ATLAS_URL_V2="mongodb://<user>:<password>@<cluster-name>-shard-00-00-<cluster-path>.mongodb.net:27017,<cluster-name>-shard-00-01-<cluster-path>.mongodb.net:27017,<cluster-name>-shard-00-02-<cluster-path>.mongodb.net:27017/kargo?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
MONGO_ATLAS_URL_V3="mongodb+srv://<user>:<password>@<cluster-name>-<cluster-path>.mongodb.net/kargo&retryWrites=true"
```

::: tip
To get the connection strings, click on the `CONNECT` button attached to your cluster. Then select `Connect your application` and a window will display the connection strings for the different version of the driver.
:::

::: warning
Do not forget to quote the variables.
:::

* update the DB URL variables for the services, for instance:

```bash
...
KANO_DB_URL=$MONGO_ATLAS_URL_V2
...
VIGICRUES_DB_URL=$MONGO_ATLAS_URL_V3
...
WEACAST_DB_URL=$MONGO_ATLAS_URL_V2
WEACAST_LOADERS_DB_URL=$MONGO_ATLAS_URL_V3
...
```



