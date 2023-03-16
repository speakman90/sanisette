import React from 'react';

function MainPage() {
    return (
        <div ng-cloak ng-app="ods-widgets">
            <ods-dataset-context context="sanisettesparis" sanisettesparis-domain="opendata.paris.fr" sanisettesparis-dataset="sanisettesparis" sanisettesparis-parameters="{'disjunctive.type':true,'disjunctive.statut':true,'disjunctive.arrondissement':true,'disjunctive.horaire':true,'disjunctive.acces_pmr':true,'disjunctive.relais_bebe':true}">
                <ods-map no-refit="true" scroll-wheel-zoom="false" basemap="jawg.dark" location="15,48.85987,2.34518">
                    <ods-map-layer-group>
                        <ods-map-layer context="sanisettesparis" color="#FFDD67" picto="ods-toilets" show-marker="true" display="auto" shape-opacity="0.5" point-opacity="1" border-color="#FFFFFF" border-opacity="1" border-size="1" border-pattern="solid" size="4" size-min="3" size-max="5" size-function="linear"></ods-map-layer>
                    </ods-map-layer-group>
                </ods-map>
            </ods-dataset-context>
        </div>
    );
}

export default MainPage;