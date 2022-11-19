import proj4 from 'proj4';
import * as olProj4 from 'ol/proj/proj4';

export const Projections = {
  EPSG_28992: {
    name: 'EPSG:28992',
    value:
      '+proj=sterea +lat_0=52.1561605555556 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +y_0=463000 +ellps=bessel +towgs84=565.4171,50.3319,465.5524,1.9342,-1.6677,9.1019,4.0725 +units=m +no_defs +type=crs',
  },
};

export const defineProjection = (name: string, value: string) => {
  proj4.defs(name, value);
  olProj4.register(proj4);
};
