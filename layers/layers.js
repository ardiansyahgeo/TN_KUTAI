var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_google_1 = new ol.layer.Tile({
            'title': 'google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Topografi_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Topografi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Topografi_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13021427.240532, 15430.362351, 13092640.792559, 64752.178413]
                            })
                        });
var lyr_PrioritasRehabilitasiReplantingTinggimerahSedangkuningRendahHijau_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Prioritas Rehabilitasi/Replanting, Tinggi(merah)-Sedang(kuning)-Rendah(Hijau)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PrioritasRehabilitasiReplantingTinggimerahSedangkuningRendahHijau_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13021427.240442, 15429.152362, 13092645.935778, 64752.184840]
                            })
                        });
var format_Analisispotensiancamandankonfliklahan_4 = new ol.format.GeoJSON();
var features_Analisispotensiancamandankonfliklahan_4 = format_Analisispotensiancamandankonfliklahan_4.readFeatures(json_Analisispotensiancamandankonfliklahan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Analisispotensiancamandankonfliklahan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Analisispotensiancamandankonfliklahan_4.addFeatures(features_Analisispotensiancamandankonfliklahan_4);
var lyr_Analisispotensiancamandankonfliklahan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Analisispotensiancamandankonfliklahan_4, 
                style: style_Analisispotensiancamandankonfliklahan_4,
                interactive: true,
    title: 'Analisis potensi ancaman dan konflik lahan<br />\
    <img src="styles/legend/Analisispotensiancamandankonfliklahan_4_0.png" /> Potensi Konflik Sangat Tinggi<br />\
    <img src="styles/legend/Analisispotensiancamandankonfliklahan_4_1.png" /> Potensi Konflik Tinggi<br />\
    <img src="styles/legend/Analisispotensiancamandankonfliklahan_4_2.png" /> Potensi Konflik Sedang<br />\
    <img src="styles/legend/Analisispotensiancamandankonfliklahan_4_3.png" /> Potensi Konflik Rendah<br />\
    <img src="styles/legend/Analisispotensiancamandankonfliklahan_4_4.png" /> Potensi Konflik Sangat Rendah<br />'
        });
var format_JenisTanah_5 = new ol.format.GeoJSON();
var features_JenisTanah_5 = format_JenisTanah_5.readFeatures(json_JenisTanah_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JenisTanah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JenisTanah_5.addFeatures(features_JenisTanah_5);
var lyr_JenisTanah_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JenisTanah_5, 
                style: style_JenisTanah_5,
                interactive: true,
    title: 'Jenis Tanah<br />\
    <img src="styles/legend/JenisTanah_5_0.png" /> Sulfaquents; Hydraquents<br />\
    <img src="styles/legend/JenisTanah_5_1.png" /> Tropaquepts; Fluvaquents; Tropohemist<br />\
    <img src="styles/legend/JenisTanah_5_2.png" /> Tropudults; Dystropepts<br />\
    <img src="styles/legend/JenisTanah_5_3.png" /> Tropudults; Tropaquepts<br />'
        });
var format_TUTUPAN_LAHAN_6 = new ol.format.GeoJSON();
var features_TUTUPAN_LAHAN_6 = format_TUTUPAN_LAHAN_6.readFeatures(json_TUTUPAN_LAHAN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TUTUPAN_LAHAN_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TUTUPAN_LAHAN_6.addFeatures(features_TUTUPAN_LAHAN_6);
var lyr_TUTUPAN_LAHAN_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TUTUPAN_LAHAN_6, 
                style: style_TUTUPAN_LAHAN_6,
                interactive: true,
    title: 'TUTUPAN_LAHAN<br />\
    <img src="styles/legend/TUTUPAN_LAHAN_6_0.png" /> Hutan Lahan Kering Primer<br />\
    <img src="styles/legend/TUTUPAN_LAHAN_6_1.png" /> Hutan Lahan Kering Sekunder/Bekas Tebangan<br />\
    <img src="styles/legend/TUTUPAN_LAHAN_6_2.png" /> Hutan Mangrove Primer<br />\
    <img src="styles/legend/TUTUPAN_LAHAN_6_3.png" /> Hutan Mangrove Sekunder/Bekas Tebangan<br />\
    <img src="styles/legend/TUTUPAN_LAHAN_6_4.png" /> Kebun<br />\
    <img src="styles/legend/TUTUPAN_LAHAN_6_5.png" /> Permukiman<br />\
    <img src="styles/legend/TUTUPAN_LAHAN_6_6.png" /> Pertanian Lahan Kering Campuran<br />\
    <img src="styles/legend/TUTUPAN_LAHAN_6_7.png" /> Rawa<br />\
    <img src="styles/legend/TUTUPAN_LAHAN_6_8.png" /> Sawah<br />\
    <img src="styles/legend/TUTUPAN_LAHAN_6_9.png" /> Semak Belukar<br />\
    <img src="styles/legend/TUTUPAN_LAHAN_6_10.png" /> Semak Belukar Rawa<br />\
    <img src="styles/legend/TUTUPAN_LAHAN_6_11.png" /> Tambak<br />\
    <img src="styles/legend/TUTUPAN_LAHAN_6_12.png" /> Tanah Terbuka<br />\
    <img src="styles/legend/TUTUPAN_LAHAN_6_13.png" /> Tubuh Air<br />'
        });
var format_ZonasiTNKutai_7 = new ol.format.GeoJSON();
var features_ZonasiTNKutai_7 = format_ZonasiTNKutai_7.readFeatures(json_ZonasiTNKutai_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonasiTNKutai_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonasiTNKutai_7.addFeatures(features_ZonasiTNKutai_7);
var lyr_ZonasiTNKutai_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZonasiTNKutai_7, 
                style: style_ZonasiTNKutai_7,
                interactive: true,
    title: 'Zonasi TN Kutai<br />\
    <img src="styles/legend/ZonasiTNKutai_7_0.png" /> ZONA INTI<br />\
    <img src="styles/legend/ZonasiTNKutai_7_1.png" /> ZONA KHUSUS<br />\
    <img src="styles/legend/ZonasiTNKutai_7_2.png" /> ZONA PEMANFAATAN<br />\
    <img src="styles/legend/ZonasiTNKutai_7_3.png" /> ZONA REHABILITASI<br />\
    <img src="styles/legend/ZonasiTNKutai_7_4.png" /> ZONA RIMBA<br />'
        });
var format_KARET_8 = new ol.format.GeoJSON();
var features_KARET_8 = format_KARET_8.readFeatures(json_KARET_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KARET_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KARET_8.addFeatures(features_KARET_8);
var lyr_KARET_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KARET_8, 
                style: style_KARET_8,
                interactive: true,
                title: '<img src="styles/legend/KARET_8.png" /> KARET'
            });
var format_TANAHTERBUKA_9 = new ol.format.GeoJSON();
var features_TANAHTERBUKA_9 = format_TANAHTERBUKA_9.readFeatures(json_TANAHTERBUKA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANAHTERBUKA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANAHTERBUKA_9.addFeatures(features_TANAHTERBUKA_9);
var lyr_TANAHTERBUKA_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TANAHTERBUKA_9, 
                style: style_TANAHTERBUKA_9,
                interactive: true,
                title: '<img src="styles/legend/TANAHTERBUKA_9.png" /> TANAH TERBUKA'
            });
var format_PERTANIAN_LAHAN_KERING_CAMPURAN_10 = new ol.format.GeoJSON();
var features_PERTANIAN_LAHAN_KERING_CAMPURAN_10 = format_PERTANIAN_LAHAN_KERING_CAMPURAN_10.readFeatures(json_PERTANIAN_LAHAN_KERING_CAMPURAN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERTANIAN_LAHAN_KERING_CAMPURAN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERTANIAN_LAHAN_KERING_CAMPURAN_10.addFeatures(features_PERTANIAN_LAHAN_KERING_CAMPURAN_10);
var lyr_PERTANIAN_LAHAN_KERING_CAMPURAN_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PERTANIAN_LAHAN_KERING_CAMPURAN_10, 
                style: style_PERTANIAN_LAHAN_KERING_CAMPURAN_10,
                interactive: true,
                title: '<img src="styles/legend/PERTANIAN_LAHAN_KERING_CAMPURAN_10.png" /> PERTANIAN_LAHAN_KERING_CAMPURAN'
            });
var format_BANGUNAN_11 = new ol.format.GeoJSON();
var features_BANGUNAN_11 = format_BANGUNAN_11.readFeatures(json_BANGUNAN_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_11.addFeatures(features_BANGUNAN_11);
var lyr_BANGUNAN_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BANGUNAN_11, 
                style: style_BANGUNAN_11,
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_11.png" /> BANGUNAN'
            });
var format_SAWAH_12 = new ol.format.GeoJSON();
var features_SAWAH_12 = format_SAWAH_12.readFeatures(json_SAWAH_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAWAH_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAWAH_12.addFeatures(features_SAWAH_12);
var lyr_SAWAH_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAWAH_12, 
                style: style_SAWAH_12,
                interactive: true,
                title: '<img src="styles/legend/SAWAH_12.png" /> SAWAH'
            });
var format_SAWIT_13 = new ol.format.GeoJSON();
var features_SAWIT_13 = format_SAWIT_13.readFeatures(json_SAWIT_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAWIT_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAWIT_13.addFeatures(features_SAWIT_13);
var lyr_SAWIT_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SAWIT_13, 
                style: style_SAWIT_13,
                interactive: true,
                title: '<img src="styles/legend/SAWIT_13.png" /> SAWIT'
            });
var format_TAMBAK_14 = new ol.format.GeoJSON();
var features_TAMBAK_14 = format_TAMBAK_14.readFeatures(json_TAMBAK_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAMBAK_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAMBAK_14.addFeatures(features_TAMBAK_14);
var lyr_TAMBAK_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TAMBAK_14, 
                style: style_TAMBAK_14,
                interactive: true,
                title: '<img src="styles/legend/TAMBAK_14.png" /> TAMBAK'
            });
var format_Jalan_15 = new ol.format.GeoJSON();
var features_Jalan_15 = format_Jalan_15.readFeatures(json_Jalan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_15.addFeatures(features_Jalan_15);
var lyr_Jalan_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_15, 
                style: style_Jalan_15,
                interactive: true,
                title: '<img src="styles/legend/Jalan_15.png" /> Jalan'
            });
var format_GeologiLitologi_16 = new ol.format.GeoJSON();
var features_GeologiLitologi_16 = format_GeologiLitologi_16.readFeatures(json_GeologiLitologi_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeologiLitologi_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeologiLitologi_16.addFeatures(features_GeologiLitologi_16);
var lyr_GeologiLitologi_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GeologiLitologi_16, 
                style: style_GeologiLitologi_16,
                interactive: true,
    title: 'Geologi Litologi<br />\
    <img src="styles/legend/GeologiLitologi_16_0.png" /> ALUVIUM<br />\
    <img src="styles/legend/GeologiLitologi_16_1.png" /> BALIKPAPAN<br />\
    <img src="styles/legend/GeologiLitologi_16_2.png" /> BEBULUH<br />\
    <img src="styles/legend/GeologiLitologi_16_3.png" /> KAMPUNGBARU<br />\
    <img src="styles/legend/GeologiLitologi_16_4.png" /> MAAU<br />\
    <img src="styles/legend/GeologiLitologi_16_5.png" /> PAMALUAN<br />\
    <img src="styles/legend/GeologiLitologi_16_6.png" /> PULAUBALANG<br />'
        });
var format_GeologiStruktur_17 = new ol.format.GeoJSON();
var features_GeologiStruktur_17 = format_GeologiStruktur_17.readFeatures(json_GeologiStruktur_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeologiStruktur_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeologiStruktur_17.addFeatures(features_GeologiStruktur_17);
var lyr_GeologiStruktur_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GeologiStruktur_17, 
                style: style_GeologiStruktur_17,
                interactive: true,
    title: 'Geologi Struktur<br />\
    <img src="styles/legend/GeologiStruktur_17_0.png" /> Antiklin<br />\
    <img src="styles/legend/GeologiStruktur_17_1.png" /> Kelurusan<br />\
    <img src="styles/legend/GeologiStruktur_17_2.png" /> Sesar<br />\
    <img src="styles/legend/GeologiStruktur_17_3.png" /> Sesar Anjak<br />\
    <img src="styles/legend/GeologiStruktur_17_4.png" /> Sinklin<br />'
        });
var format_BatasDas_18 = new ol.format.GeoJSON();
var features_BatasDas_18 = format_BatasDas_18.readFeatures(json_BatasDas_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasDas_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasDas_18.addFeatures(features_BatasDas_18);
var lyr_BatasDas_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BatasDas_18, 
                style: style_BatasDas_18,
                interactive: true,
    title: 'Batas Das<br />\
    <img src="styles/legend/BatasDas_18_0.png" /> DAS SANGANAKAN<br />\
    <img src="styles/legend/BatasDas_18_1.png" /> DAS SANGATA<br />\
    <img src="styles/legend/BatasDas_18_2.png" /> DAS SANGKIMA<br />\
    <img src="styles/legend/BatasDas_18_3.png" /> DAS SANTAN<br />\
    <img src="styles/legend/BatasDas_18_4.png" /> MAHAKAM<br />'
        });
var format_SubDas_19 = new ol.format.GeoJSON();
var features_SubDas_19 = format_SubDas_19.readFeatures(json_SubDas_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubDas_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubDas_19.addFeatures(features_SubDas_19);
var lyr_SubDas_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SubDas_19, 
                style: style_SubDas_19,
                interactive: true,
                title: '<img src="styles/legend/SubDas_19.png" /> Sub Das'
            });
var format_BATASTNKUTAI4194_20 = new ol.format.GeoJSON();
var features_BATASTNKUTAI4194_20 = format_BATASTNKUTAI4194_20.readFeatures(json_BATASTNKUTAI4194_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASTNKUTAI4194_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASTNKUTAI4194_20.addFeatures(features_BATASTNKUTAI4194_20);
var lyr_BATASTNKUTAI4194_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATASTNKUTAI4194_20, 
                style: style_BATASTNKUTAI4194_20,
                interactive: true,
                title: '<img src="styles/legend/BATASTNKUTAI4194_20.png" /> BATAS TNKUTAI 4194'
            });
var format_BATASRESORTTNKUTAI4194_21 = new ol.format.GeoJSON();
var features_BATASRESORTTNKUTAI4194_21 = format_BATASRESORTTNKUTAI4194_21.readFeatures(json_BATASRESORTTNKUTAI4194_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASRESORTTNKUTAI4194_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASRESORTTNKUTAI4194_21.addFeatures(features_BATASRESORTTNKUTAI4194_21);
var lyr_BATASRESORTTNKUTAI4194_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATASRESORTTNKUTAI4194_21, 
                style: style_BATASRESORTTNKUTAI4194_21,
                interactive: true,
                title: '<img src="styles/legend/BATASRESORTTNKUTAI4194_21.png" /> BATAS RESORT TNKUTAI 4194'
            });
var format_SKLOKASIFSP_22 = new ol.format.GeoJSON();
var features_SKLOKASIFSP_22 = format_SKLOKASIFSP_22.readFeatures(json_SKLOKASIFSP_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SKLOKASIFSP_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SKLOKASIFSP_22.addFeatures(features_SKLOKASIFSP_22);
var lyr_SKLOKASIFSP_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SKLOKASIFSP_22, 
                style: style_SKLOKASIFSP_22,
                interactive: true,
                title: '<img src="styles/legend/SKLOKASIFSP_22.png" /> SK LOKASI FSP'
            });
var format_RehabDASdiTNKutaiIPPKH_23 = new ol.format.GeoJSON();
var features_RehabDASdiTNKutaiIPPKH_23 = format_RehabDASdiTNKutaiIPPKH_23.readFeatures(json_RehabDASdiTNKutaiIPPKH_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RehabDASdiTNKutaiIPPKH_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RehabDASdiTNKutaiIPPKH_23.addFeatures(features_RehabDASdiTNKutaiIPPKH_23);
var lyr_RehabDASdiTNKutaiIPPKH_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RehabDASdiTNKutaiIPPKH_23, 
                style: style_RehabDASdiTNKutaiIPPKH_23,
                interactive: true,
                title: '<img src="styles/legend/RehabDASdiTNKutaiIPPKH_23.png" /> Rehab DAS di TN Kutai IPPKH'
            });
var format_SUNGAI_24 = new ol.format.GeoJSON();
var features_SUNGAI_24 = format_SUNGAI_24.readFeatures(json_SUNGAI_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_24.addFeatures(features_SUNGAI_24);
var lyr_SUNGAI_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_24, 
                style: style_SUNGAI_24,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_24.png" /> SUNGAI'
            });
var format_SurveyLapang_25 = new ol.format.GeoJSON();
var features_SurveyLapang_25 = format_SurveyLapang_25.readFeatures(json_SurveyLapang_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurveyLapang_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurveyLapang_25.addFeatures(features_SurveyLapang_25);
var lyr_SurveyLapang_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SurveyLapang_25, 
                style: style_SurveyLapang_25,
                interactive: true,
                title: '<img src="styles/legend/SurveyLapang_25.png" /> Survey Lapang'
            });

lyr_OpenStreetMap_0.setVisible(false);lyr_google_1.setVisible(true);lyr_Topografi_2.setVisible(false);lyr_PrioritasRehabilitasiReplantingTinggimerahSedangkuningRendahHijau_3.setVisible(false);lyr_Analisispotensiancamandankonfliklahan_4.setVisible(false);lyr_JenisTanah_5.setVisible(false);lyr_TUTUPAN_LAHAN_6.setVisible(true);lyr_ZonasiTNKutai_7.setVisible(false);lyr_KARET_8.setVisible(false);lyr_TANAHTERBUKA_9.setVisible(false);lyr_PERTANIAN_LAHAN_KERING_CAMPURAN_10.setVisible(false);lyr_BANGUNAN_11.setVisible(false);lyr_SAWAH_12.setVisible(false);lyr_SAWIT_13.setVisible(false);lyr_TAMBAK_14.setVisible(false);lyr_Jalan_15.setVisible(false);lyr_GeologiLitologi_16.setVisible(false);lyr_GeologiStruktur_17.setVisible(false);lyr_BatasDas_18.setVisible(false);lyr_SubDas_19.setVisible(false);lyr_BATASTNKUTAI4194_20.setVisible(true);lyr_BATASRESORTTNKUTAI4194_21.setVisible(false);lyr_SKLOKASIFSP_22.setVisible(false);lyr_RehabDASdiTNKutaiIPPKH_23.setVisible(false);lyr_SUNGAI_24.setVisible(true);lyr_SurveyLapang_25.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_google_1,lyr_Topografi_2,lyr_PrioritasRehabilitasiReplantingTinggimerahSedangkuningRendahHijau_3,lyr_Analisispotensiancamandankonfliklahan_4,lyr_JenisTanah_5,lyr_TUTUPAN_LAHAN_6,lyr_ZonasiTNKutai_7,lyr_KARET_8,lyr_TANAHTERBUKA_9,lyr_PERTANIAN_LAHAN_KERING_CAMPURAN_10,lyr_BANGUNAN_11,lyr_SAWAH_12,lyr_SAWIT_13,lyr_TAMBAK_14,lyr_Jalan_15,lyr_GeologiLitologi_16,lyr_GeologiStruktur_17,lyr_BatasDas_18,lyr_SubDas_19,lyr_BATASTNKUTAI4194_20,lyr_BATASRESORTTNKUTAI4194_21,lyr_SKLOKASIFSP_22,lyr_RehabDASdiTNKutaiIPPKH_23,lyr_SUNGAI_24,lyr_SurveyLapang_25];
lyr_Analisispotensiancamandankonfliklahan_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KETERANGAN': 'KETERANGAN', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_JenisTanah_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SOIL_GREAT': 'SOIL_GREAT', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TUTUPAN_LAHAN_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Remark': 'Remark', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'luas': 'luas', 'NAME': 'NAME', });
lyr_ZonasiTNKutai_7.set('fieldAliases', {'Luas_Zonas': 'Luas_Zonas', 'id_pulau': 'id_pulau', 'Pulau': 'Pulau', 'id_prov': 'id_prov', 'Provinsi': 'Provinsi', 'id_fungsi': 'id_fungsi', 'Fungsi': 'Fungsi', 'Nama': 'Nama', 'Penetapan': 'Penetapan', 'Zonasi': 'Zonasi', 'Kode_zona': 'Kode_zona', 'SK_Zonasi': 'SK_Zonasi', 'Luas_Ha': 'Luas_Ha', 'luas': 'luas', });
lyr_KARET_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Remark': 'Remark', 'NAME': 'NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'luas': 'luas', });
lyr_TANAHTERBUKA_9.set('fieldAliases', {'Remark': 'Remark', 'Luas': 'Luas', 'NAME': 'NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_PERTANIAN_LAHAN_KERING_CAMPURAN_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Remark': 'Remark', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'luas': 'luas', 'NAME': 'NAME', });
lyr_BANGUNAN_11.set('fieldAliases', {'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'OBJECTID_1': 'OBJECTID_1', 'NAME': 'NAME', });
lyr_SAWAH_12.set('fieldAliases', {'Remark': 'Remark', 'Luas': 'Luas', });
lyr_SAWIT_13.set('fieldAliases', {'Luas': 'Luas', 'NAME': 'NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TAMBAK_14.set('fieldAliases', {'Remark': 'Remark', 'Luas': 'Luas', });
lyr_Jalan_15.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_GeologiLitologi_16.set('fieldAliases', {'1_SIMBOL': '1_SIMBOL', '2_Formasi': '2_Formasi', '3_Ket': '3_Ket', '4_Umur': '4_Umur', });
lyr_GeologiStruktur_17.set('fieldAliases', {'Id': 'Id', 'Keterangan': 'Keterangan', });
lyr_BatasDas_18.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'keterangan': 'keterangan', });
lyr_SubDas_19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LAYER': 'LAYER', 'STREAM_ID': 'STREAM_ID', 'NEXT_STREA': 'NEXT_STREA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BATASTNKUTAI4194_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id_prov': 'id_prov', 'Provinsi': 'Provinsi', 'id_fungsi': 'id_fungsi', 'Fungsi': 'Fungsi', 'Nama': 'Nama', 'Penunjukan': 'Penunjukan', 'Penetapan': 'Penetapan', 'id_pulau': 'id_pulau', 'Pulau': 'Pulau', 'Luas_Ha': 'Luas_Ha', 'Keterangan': 'Keterangan', 'HA': 'HA', });
lyr_BATASRESORTTNKUTAI4194_21.set('fieldAliases', {'id_fungsi': 'id_fungsi', 'Fungsi': 'Fungsi', 'Nama': 'Nama', 'Penunjukan': 'Penunjukan', 'Penetapan': 'Penetapan', 'Luas_Ha': 'Luas_Ha', 'Luas_Res': 'Luas_Res', });
lyr_SKLOKASIFSP_22.set('fieldAliases', {'Id': 'Id', });
lyr_RehabDASdiTNKutaiIPPKH_23.set('fieldAliases', {'Id': 'Id', 'NAMA_IPPKH': 'NAMA_IPPKH', 'SK_DAS': 'SK_DAS', 'TGL_DAS': 'TGL_DAS', 'LUAS_DAS': 'LUAS_DAS', 'KWS_HTN': 'KWS_HTN', 'ID_BLOK': 'ID_BLOK', 'PENILAIAN': 'PENILAIAN', 'PENANAMAN': 'PENANAMAN', 'LUAS_REAL': 'LUAS_REAL', '2013_HA': '2013_HA', '2014_HA': '2014_HA', '2015_HA': '2015_HA', '2016_HA': '2016_HA', '2017_HA': '2017_HA', '2018_HA': '2018_HA', '2019_HA': '2019_HA', '2020_HA': '2020_HA', '2021_HA': '2021_HA', '2022_HA': '2022_HA', '2020_TNM': '2020_TNM', });
lyr_SUNGAI_24.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SurveyLapang_25.set('fieldAliases', {'GM_LAYER': 'GM_LAYER', 'GM_TYPE': 'GM_TYPE', 'ELEVATION': 'ELEVATION', 'ID': 'ID', 'Name': 'Name', 'Date': 'Date', 'Time': 'Time', 'Lon': 'Lon', 'Lat': 'Lat', 'Altitude': 'Altitude', 'North': 'North', 'Azimuth': 'Azimuth', 'Cam__Maker': 'Cam__Maker', 'Cam__Model': 'Cam__Model', 'Title': 'Title', 'Comment': 'Comment', 'Path': 'Path', 'RelPath': 'RelPath', 'Timestamp': 'Timestamp', 'Images': 'Images', 'fid_': 'fid_', 'layer': 'layer', });
lyr_Analisispotensiancamandankonfliklahan_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'KETERANGAN': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JenisTanah_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'SOIL_GREAT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TUTUPAN_LAHAN_6.set('fieldImages', {'OBJECTID': '', 'Remark': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'luas': '', 'NAME': 'TextEdit', });
lyr_ZonasiTNKutai_7.set('fieldImages', {'Luas_Zonas': 'TextEdit', 'id_pulau': 'Range', 'Pulau': 'TextEdit', 'id_prov': 'Range', 'Provinsi': 'TextEdit', 'id_fungsi': 'Range', 'Fungsi': 'TextEdit', 'Nama': 'TextEdit', 'Penetapan': 'TextEdit', 'Zonasi': 'TextEdit', 'Kode_zona': 'TextEdit', 'SK_Zonasi': 'TextEdit', 'Luas_Ha': 'TextEdit', 'luas': '', });
lyr_KARET_8.set('fieldImages', {'OBJECTID': '', 'Remark': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'luas': '', });
lyr_TANAHTERBUKA_9.set('fieldImages', {'Remark': 'TextEdit', 'Luas': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_PERTANIAN_LAHAN_KERING_CAMPURAN_10.set('fieldImages', {'OBJECTID': '', 'Remark': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'luas': '', 'NAME': 'TextEdit', });
lyr_BANGUNAN_11.set('fieldImages', {'LAYER': 'TextEdit', 'ELEVATION': 'Range', 'OBJECTID_1': 'TextEdit', 'NAME': 'TextEdit', });
lyr_SAWAH_12.set('fieldImages', {'Remark': 'TextEdit', 'Luas': 'TextEdit', });
lyr_SAWIT_13.set('fieldImages', {'Luas': 'TextEdit', 'NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TAMBAK_14.set('fieldImages', {'Remark': 'TextEdit', 'Luas': 'TextEdit', });
lyr_Jalan_15.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_GeologiLitologi_16.set('fieldImages', {'1_SIMBOL': 'TextEdit', '2_Formasi': 'TextEdit', '3_Ket': 'TextEdit', '4_Umur': 'TextEdit', });
lyr_GeologiStruktur_17.set('fieldImages', {'Id': 'Range', 'Keterangan': 'TextEdit', });
lyr_BatasDas_18.set('fieldImages', {'Id': 'TextEdit', 'gridcode': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'keterangan': 'TextEdit', });
lyr_SubDas_19.set('fieldImages', {'OBJECTID': 'TextEdit', 'LAYER': 'TextEdit', 'STREAM_ID': 'Range', 'NEXT_STREA': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BATASTNKUTAI4194_20.set('fieldImages', {'OBJECTID': 'Range', 'id_prov': 'Range', 'Provinsi': 'TextEdit', 'id_fungsi': 'TextEdit', 'Fungsi': 'TextEdit', 'Nama': 'TextEdit', 'Penunjukan': 'TextEdit', 'Penetapan': 'TextEdit', 'id_pulau': 'Range', 'Pulau': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Keterangan': 'TextEdit', 'HA': 'TextEdit', });
lyr_BATASRESORTTNKUTAI4194_21.set('fieldImages', {'id_fungsi': 'TextEdit', 'Fungsi': 'TextEdit', 'Nama': 'TextEdit', 'Penunjukan': 'TextEdit', 'Penetapan': 'TextEdit', 'Luas_Ha': 'TextEdit', 'Luas_Res': 'TextEdit', });
lyr_SKLOKASIFSP_22.set('fieldImages', {'Id': 'TextEdit', });
lyr_RehabDASdiTNKutaiIPPKH_23.set('fieldImages', {'Id': 'Range', 'NAMA_IPPKH': 'TextEdit', 'SK_DAS': 'TextEdit', 'TGL_DAS': 'TextEdit', 'LUAS_DAS': 'TextEdit', 'KWS_HTN': 'TextEdit', 'ID_BLOK': 'TextEdit', 'PENILAIAN': 'TextEdit', 'PENANAMAN': 'TextEdit', 'LUAS_REAL': 'TextEdit', '2013_HA': 'TextEdit', '2014_HA': 'TextEdit', '2015_HA': 'TextEdit', '2016_HA': 'TextEdit', '2017_HA': 'TextEdit', '2018_HA': 'TextEdit', '2019_HA': 'TextEdit', '2020_HA': 'TextEdit', '2021_HA': 'TextEdit', '2022_HA': 'TextEdit', '2020_TNM': 'TextEdit', });
lyr_SUNGAI_24.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_SurveyLapang_25.set('fieldImages', {'GM_LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'ELEVATION': 'TextEdit', 'ID': 'TextEdit', 'Name': 'TextEdit', 'Date': 'TextEdit', 'Time': 'TextEdit', 'Lon': 'TextEdit', 'Lat': 'TextEdit', 'Altitude': 'TextEdit', 'North': 'TextEdit', 'Azimuth': 'TextEdit', 'Cam__Maker': 'TextEdit', 'Cam__Model': 'TextEdit', 'Title': 'TextEdit', 'Comment': 'TextEdit', 'Path': 'TextEdit', 'RelPath': 'TextEdit', 'Timestamp': 'TextEdit', 'Images': 'TextEdit', 'fid_': 'TextEdit', 'layer': 'TextEdit', });
lyr_Analisispotensiancamandankonfliklahan_4.set('fieldLabels', {'OBJECTID': 'inline label', 'KETERANGAN': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_JenisTanah_5.set('fieldLabels', {'OBJECTID': 'inline label', 'SOIL_GREAT': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_TUTUPAN_LAHAN_6.set('fieldLabels', {'OBJECTID': 'no label', 'Remark': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'luas': 'no label', 'NAME': 'inline label', });
lyr_ZonasiTNKutai_7.set('fieldLabels', {'Luas_Zonas': 'inline label', 'id_pulau': 'inline label', 'Pulau': 'inline label', 'id_prov': 'inline label', 'Provinsi': 'inline label', 'id_fungsi': 'inline label', 'Fungsi': 'inline label', 'Nama': 'inline label', 'Penetapan': 'inline label', 'Zonasi': 'inline label', 'Kode_zona': 'inline label', 'SK_Zonasi': 'inline label', 'Luas_Ha': 'inline label', 'luas': 'no label', });
lyr_KARET_8.set('fieldLabels', {'OBJECTID': 'no label', 'Remark': 'no label', 'NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'luas': 'no label', });
lyr_TANAHTERBUKA_9.set('fieldLabels', {'Remark': 'no label', 'Luas': 'no label', 'NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_PERTANIAN_LAHAN_KERING_CAMPURAN_10.set('fieldLabels', {'OBJECTID': 'no label', 'Remark': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'luas': 'no label', 'NAME': 'no label', });
lyr_BANGUNAN_11.set('fieldLabels', {'LAYER': 'no label', 'ELEVATION': 'no label', 'OBJECTID_1': 'no label', 'NAME': 'no label', });
lyr_SAWAH_12.set('fieldLabels', {'Remark': 'no label', 'Luas': 'no label', });
lyr_SAWIT_13.set('fieldLabels', {'Luas': 'no label', 'NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_TAMBAK_14.set('fieldLabels', {'Remark': 'no label', 'Luas': 'no label', });
lyr_Jalan_15.set('fieldLabels', {'osm_id': 'inline label', 'code': 'inline label', 'fclass': 'inline label', 'name': 'inline label', 'ref': 'inline label', 'oneway': 'inline label', 'maxspeed': 'inline label', 'layer': 'inline label', 'bridge': 'inline label', 'tunnel': 'inline label', });
lyr_GeologiLitologi_16.set('fieldLabels', {'1_SIMBOL': 'inline label', '2_Formasi': 'inline label', '3_Ket': 'inline label', '4_Umur': 'inline label', });
lyr_GeologiStruktur_17.set('fieldLabels', {'Id': 'inline label', 'Keterangan': 'inline label', });
lyr_BatasDas_18.set('fieldLabels', {'Id': 'inline label', 'gridcode': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'keterangan': 'no label', });
lyr_SubDas_19.set('fieldLabels', {'OBJECTID': 'inline label', 'LAYER': 'inline label', 'STREAM_ID': 'inline label', 'NEXT_STREA': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_BATASTNKUTAI4194_20.set('fieldLabels', {'OBJECTID': 'inline label', 'id_prov': 'inline label', 'Provinsi': 'no label', 'id_fungsi': 'inline label', 'Fungsi': 'inline label', 'Nama': 'inline label', 'Penunjukan': 'inline label', 'Penetapan': 'inline label', 'id_pulau': 'inline label', 'Pulau': 'inline label', 'Luas_Ha': 'inline label', 'Keterangan': 'inline label', 'HA': 'no label', });
lyr_BATASRESORTTNKUTAI4194_21.set('fieldLabels', {'id_fungsi': 'inline label', 'Fungsi': 'inline label', 'Nama': 'inline label', 'Penunjukan': 'inline label', 'Penetapan': 'inline label', 'Luas_Ha': 'inline label', 'Luas_Res': 'inline label', });
lyr_SKLOKASIFSP_22.set('fieldLabels', {'Id': 'inline label', });
lyr_RehabDASdiTNKutaiIPPKH_23.set('fieldLabels', {'Id': 'inline label', 'NAMA_IPPKH': 'inline label', 'SK_DAS': 'inline label', 'TGL_DAS': 'inline label', 'LUAS_DAS': 'inline label', 'KWS_HTN': 'inline label', 'ID_BLOK': 'inline label', 'PENILAIAN': 'inline label', 'PENANAMAN': 'inline label', 'LUAS_REAL': 'inline label', '2013_HA': 'inline label', '2014_HA': 'inline label', '2015_HA': 'inline label', '2016_HA': 'inline label', '2017_HA': 'inline label', '2018_HA': 'inline label', '2019_HA': 'inline label', '2020_HA': 'inline label', '2021_HA': 'inline label', '2022_HA': 'inline label', '2020_TNM': 'inline label', });
lyr_SUNGAI_24.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'TIPSNG': 'inline label', 'KLSSNG': 'inline label', 'FCODE': 'inline label', 'REMARK': 'inline label', 'SRS_ID': 'inline label', 'LCODE': 'inline label', 'METADATA': 'inline label', 'NAMWS': 'inline label', 'NAMDAS': 'inline label', 'STATUS': 'inline label', 'WMAX': 'inline label', 'DBTMAX': 'inline label', 'SLPRT': 'inline label', 'SHAPE_Leng': 'inline label', });
lyr_SurveyLapang_25.set('fieldLabels', {'GM_LAYER': 'inline label', 'GM_TYPE': 'inline label', 'ELEVATION': 'inline label', 'ID': 'inline label', 'Name': 'inline label', 'Date': 'inline label', 'Time': 'inline label', 'Lon': 'inline label', 'Lat': 'inline label', 'Altitude': 'inline label', 'North': 'inline label', 'Azimuth': 'inline label', 'Cam__Maker': 'inline label', 'Cam__Model': 'inline label', 'Title': 'inline label', 'Comment': 'inline label', 'Path': 'inline label', 'RelPath': 'inline label', 'Timestamp': 'inline label', 'Images': 'inline label', 'fid_': 'inline label', 'layer': 'inline label', });
lyr_SurveyLapang_25.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});