<!DOCTYPE html>
<html>
    <head>
        <title>ODS Widgets Sandbox</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="//static.opendatasoft.com/ods-widgets/latest-v2/ods-widgets.min.css">
    </head>
    <body>
        <style>
            div.leaflet-top:nth-child(1) {
                display: none;
            }
        </style>
        <div ng-cloak ng-app="ods-widgets">
            <ods-dataset-context context="sanisettesparis" sanisettesparis-domain="opendata.paris.fr" sanisettesparis-dataset="sanisettesparis" sanisettesparis-parameters="<?= $_GET["parameters"] ?>">
                <ods-map no-refit="true" scroll-wheel-zoom="false" basemap="jawg.dark" location="<?= $_GET["location"] ?>">
                    <ods-map-layer-group>
                        <ods-map-layer context="sanisettesparis" color="#FFDD67" picto="ods-toilets" show-marker="true" display="auto" shape-opacity="0.5" point-opacity="1" border-color="#FFFFFF" border-opacity="1" border-size="1" border-pattern="solid" size="4" size-min="3" size-max="5" size-function="linear"></ods-map-layer>
                    </ods-map-layer-group>
                </ods-map>
            </ods-dataset-context>
        </div>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.2/angular.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-sanitize/1.8.2/angular-sanitize.min.js"></script>
        <script type="text/javascript" src="https://static.opendatasoft.com/ods-widgets/latest-v2/ods-widgets.min.js"></script>

    </body>
</html>