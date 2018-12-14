import * as moment from 'moment';
import * as GoogleMaps from '@google/maps';

export class TravelService {
    maps_client = GoogleMaps.createClient({
        key: 'AIzaSyA9uBPtGDaCpIc4n0VLxoC3NCX5LJVTanM'
    });

    getTravelTime = async (origin, destination) => {
        return {
            directions: {
                "geocoded_waypoints": [
                    {
                        "geocoder_status": "OK",
                        "place_id": "ChIJ-fCbbkLjdUgRjLMTNYwsxfY",
                        "types": [
                            "postal_code"
                        ]
                    },
                    {
                        "geocoder_status": "OK",
                        "place_id": "ChIJ699CjHqYdUgRxhGSp_v7Z84",
                        "types": [
                            "postal_code"
                        ]
                    }
                ],
                "routes": [
                    {
                        "bounds": {
                            "northeast": {
                                "lat": 51.280131,
                                "lng": -0.1155034
                            },
                            "southwest": {
                                "lat": 50.8126674,
                                "lng": -0.358358
                            }
                        },
                        "copyrights": "Map data ©2018 Google",
                        "legs": [
                            {
                                "distance": {
                                    "text": "75.7 km",
                                    "value": 75708
                                },
                                "duration": {
                                    "text": "58 mins",
                                    "value": 3477
                                },
                                "end_address": "Brighton Rd, Worthing BN11 2ES, UK",
                                "end_location": {
                                    "lat": 50.8126674,
                                    "lng": -0.358358
                                },
                                "start_address": "Tadworth KT20 6RP, UK",
                                "start_location": {
                                    "lat": 51.2767913,
                                    "lng": -0.2076758
                                },
                                "steps": [
                                    {
                                        "distance": {
                                            "text": "0.2 km",
                                            "value": 165
                                        },
                                        "duration": {
                                            "text": "1 min",
                                            "value": 54
                                        },
                                        "end_location": {
                                            "lat": 51.2778881,
                                            "lng": -0.2063458
                                        },
                                        "html_instructions": "Head <b>northeast</b><div style=\"font-size:0.9em\">Restricted usage road</div>",
                                        "polyline": {
                                            "points": "}~}wH~pg@w@uBYq@M[IYO[MIg@GM@]?"
                                        },
                                        "start_location": {
                                            "lat": 51.2767913,
                                            "lng": -0.2076758
                                        },
                                        "travel_mode": "DRIVING"
                                    },
                                    {
                                        "distance": {
                                            "text": "48 m",
                                            "value": 48
                                        },
                                        "duration": {
                                            "text": "1 min",
                                            "value": 14
                                        },
                                        "end_location": {
                                            "lat": 51.2782201,
                                            "lng": -0.2059362
                                        },
                                        "html_instructions": "Turn <b>right</b> toward <b>Millfield Ln</b><div style=\"font-size:0.9em\">Restricted usage road</div>",
                                        "maneuver": "turn-right",
                                        "polyline": {
                                            "points": "ye~wHthg@GWg@m@QK"
                                        },
                                        "start_location": {
                                            "lat": 51.2778881,
                                            "lng": -0.2063458
                                        },
                                        "travel_mode": "DRIVING"
                                    },
                                    {
                                        "distance": {
                                            "text": "0.4 km",
                                            "value": 357
                                        },
                                        "duration": {
                                            "text": "1 min",
                                            "value": 51
                                        },
                                        "end_location": {
                                            "lat": 51.280131,
                                            "lng": -0.2099379
                                        },
                                        "html_instructions": "Turn <b>left</b> onto <b>Millfield Ln</b><div style=\"font-size:0.9em\">Restricted usage road</div>",
                                        "maneuver": "turn-left",
                                        "polyline": {
                                            "points": "{g~wHbfg@m@rDSx@[xAYr@Kb@Sd@Wl@Qd@cA|Ai@z@g@x@e@p@"
                                        },
                                        "start_location": {
                                            "lat": 51.2782201,
                                            "lng": -0.2059362
                                        },
                                        "travel_mode": "DRIVING"
                                    },
                                    {
                                        "distance": {
                                            "text": "0.5 km",
                                            "value": 515
                                        },
                                        "duration": {
                                            "text": "1 min",
                                            "value": 53
                                        },
                                        "end_location": {
                                            "lat": 51.2797856,
                                            "lng": -0.2171884
                                        },
                                        "html_instructions": "Turn <b>left</b> onto <b>Chipstead Ln</b>",
                                        "maneuver": "turn-left",
                                        "polyline": {
                                            "points": "ys~wHb_h@J\\FTHXDZF^Fn@^hGBf@@x@A~@O|GGpDAdAAdAAp@C\\Ah@?VB^DVD\\"
                                        },
                                        "start_location": {
                                            "lat": 51.280131,
                                            "lng": -0.2099379
                                        },
                                        "travel_mode": "DRIVING"
                                    },
                                    {
                                        "distance": {
                                            "text": "1.8 km",
                                            "value": 1752
                                        },
                                        "duration": {
                                            "text": "2 mins",
                                            "value": 120
                                        },
                                        "end_location": {
                                            "lat": 51.2667262,
                                            "lng": -0.2051287
                                        },
                                        "html_instructions": "At the roundabout, take the <b>1st</b> exit onto <b>Brighton Rd</b>/<b>A217</b>",
                                        "maneuver": "roundabout-left",
                                        "polyline": {
                                            "points": "uq~wHlli@D@@@BBLCHADAHCJGhAs@^UlCwApBeAjDcBdGuCdCmAhCqA~BkAhCoAxAu@j@[v@_@dB{@hG}CZQVM`@Un@c@LIRSNQLOJOJSNYRc@\\_AFSxAiEVu@zBoG`@sAX_ARw@Li@H_@F_@DU@Q@U?a@"
                                        },
                                        "start_location": {
                                            "lat": 51.2797856,
                                            "lng": -0.2171884
                                        },
                                        "travel_mode": "DRIVING"
                                    },
                                    {
                                        "distance": {
                                            "text": "0.9 km",
                                            "value": 870
                                        },
                                        "duration": {
                                            "text": "1 min",
                                            "value": 58
                                        },
                                        "end_location": {
                                            "lat": 51.26021739999999,
                                            "lng": -0.198749
                                        },
                                        "html_instructions": "At the roundabout, take the <b>2nd</b> exit and stay on <b>Brighton Rd</b>/<b>A217</b>",
                                        "maneuver": "roundabout-left",
                                        "polyline": {
                                            "points": "a`|wH`ag@AI?I?I?E@G@G@E@G@E@E@EBC@C@C@A@A@A@ABCDUHYJ_@J[J[NYLUNWPWNSXYZW`BoA`CiBdDaCjCoB|AkAbBoAlCqBnA_Ah@a@\\YZS`@W"
                                        },
                                        "start_location": {
                                            "lat": 51.2667262,
                                            "lng": -0.2051287
                                        },
                                        "travel_mode": "DRIVING"
                                    },
                                    {
                                        "distance": {
                                            "text": "4.5 km",
                                            "value": 4456
                                        },
                                        "duration": {
                                            "text": "3 mins",
                                            "value": 171
                                        },
                                        "end_location": {
                                            "lat": 51.2650944,
                                            "lng": -0.1402518
                                        },
                                        "html_instructions": "Merge onto <b>M25</b> via the ramp to <b>Croydon</b>/<b>East Grinstead</b>",
                                        "polyline": {
                                            "points": "kwzwHdye@BIBEDCDERIJGTKNMFGFMDMFWJc@RcAF[Ja@@i@?[?SAO?KEi@YsCYcCQiA]cC_@cCy@cF[kBc@aCi@mCk@kCe@uBWgA_AwD_AkDQq@GUEUCUEs@Qc@Sq@Y{@qAeEM[Si@]}@]{@Ue@iAgCi@mA_@y@_@{@g@oA[u@]{@e@oASi@Qg@e@sAe@wAa@uAa@wAYaAOm@_@uA_@{A[{AGYMi@Mo@SeASeAQcASiAQgAOeAe@gDMiAOgASaBQcBMeAMgACYGq@YiDKkAIkAMcBM}BGmAGkAEkAGeBEmACkACs@AkAAmACiA?mAAmA?mA@kA@gB?Y?i@@u@Bu@@u@Bm@DkAFgADs@Fq@Ds@Fq@Fq@Fq@Ho@Fq@Ho@F_@Hi@D[NcANaALu@Je@F_@b@sBpAuF\\wATgARaA\\aBn@mD`@mCPgA\\gCNoAPcBLmARcBZmDFu@VgDFgAHeALsCPoEDoARqIB}@"
                                        },
                                        "start_location": {
                                            "lat": 51.26021739999999,
                                            "lng": -0.198749
                                        },
                                        "travel_mode": "DRIVING"
                                    },
                                    {
                                        "distance": {
                                            "text": "1.7 km",
                                            "value": 1706
                                        },
                                        "duration": {
                                            "text": "1 min",
                                            "value": 80
                                        },
                                        "end_location": {
                                            "lat": 51.2571908,
                                            "lng": -0.1250765
                                        },
                                        "html_instructions": "At junction <b>7</b>, take the <b>M23 (S)</b> exit to <b>Brighton</b>/<b>Gatwick Airport</b>",
                                        "maneuver": "ramp-left",
                                        "polyline": {
                                            "points": "yu{wHpkZGiAAc@HgGHsFB_BHgF@[Bq@@aA@sA@kA@wA?cAAcBEuACoACgAAs@Aw@@m@@_@Ba@Ba@D]DYBQDQF]HUHWFUJUL[N[b@{@rAkCrAkCb@}@Vc@Vc@FINUHMHKDEPQHIHIPOHGLKNKLGNI^QPGJCPELCJCPCNARAN?V?J@P?XDfAJ^@XBp@@h@@r@AV?TA^Cd@GVCRCj@K^G\\IPCRGTGTGfAWDADAD?@?B?D@@@B@"
                                        },
                                        "start_location": {
                                            "lat": 51.2650944,
                                            "lng": -0.1402518
                                        },
                                        "travel_mode": "DRIVING"
                                    },
                                    {
                                        "distance": {
                                            "text": "22.4 km",
                                            "value": 22381
                                        },
                                        "duration": {
                                            "text": "16 mins",
                                            "value": 962
                                        },
                                        "end_location": {
                                            "lat": 51.0834363,
                                            "lng": -0.2008854
                                        },
                                        "html_instructions": "Merge onto <b>M23</b>",
                                        "maneuver": "merge",
                                        "polyline": {
                                            "points": "mdzwHvlW`Bs@f@Sd@S|@_@rCkAl@WPKTKr@_@pCsA|Aw@hDgBvDuBfEiCvBsAdBgA`@WpA}@n@c@\\UZU~BaBj@a@x@g@l@_@~@g@nAk@fAa@h@Q|@YVGPEh@M^Ip@Mn@Kj@IbAI^C`@AlAEbB@f@@f@@d@Bt@Fb@Ff@FvAR~AT~AVn@H~@HlAH`@@`@B|@@r@@p@A\\?PA~@C`@C^El@EbBQ|@Oj@Kb@Kl@MnA[zAe@\\M\\M~BaA~Ao@`A_@p@W|@]tA_@b@KTG^Gn@K~@Kl@E`@Cj@Cr@Al@A^@l@@f@DZ@ZBtANlAR`ARb@Lt@Tz@Zn@Vz@`@`@Rn@\\j@Zr@d@j@`@h@`@vBlBt@t@v@t@tApAfDtC`@ZRPXRz@n@hAv@xA~@dAp@`Ah@nAp@nAl@fChAl@V\\J`@Nl@TpA`@jCt@nBb@`Cd@~Cn@`Ch@jEbAnBf@jEhAlD`AlBj@xDlA|Bt@lBp@lAb@xDtAbHlCnAb@l@PPFp@Nx@R`APz@N`BP|@Fv@D`@@p@@nA@nAC`AC~@GpAM`@E`@Gz@Op@MfAWhCq@v@WjEcAjB]vAUhBWrBUlBQ`BMnAGjDK`DCt@?pABnBDvCJ~CLp@BpBJ~AFb@@tOl@jYhArEJjBHvCJtCLbK`@xBH~DNvERlDLzBJrDR`AH^DZDZD|@JZFnATv@NbAV~@T`AXjA^~@\\zAl@fAd@LDr@\\hB`AZPv@d@`Al@jAx@hAx@d@^VRb@^bAx@`Ax@fA|@j@b@nBrAPL^Tj@\\n@^`Bz@TJh@Vj@Tp@Xt@Vr@V|@Xr@RdB^n@NtAVdANdAPfANrAPnAPfAJvAPt@HL@tALTBf@D`AHdAHfCPrBJt@DzBJ|BF`CFxBDbBDlBHlAFh@Dt@Dx@HhAL`ALf@FjAPlB\\bARpBd@t@P|Ab@~@XpAb@lA`@n@Vl@TrAf@~Al@pAb@zAh@~H|B\\JVHr@N`@LrAZj@NvCl@rBb@r@JnHhAj@J|Fn@ZBhALfAHtAJjAFzDR|DL~@@hA@N@hA?|ACF?j@C`@Az@Ef@E\\E|@KlASnAWnA[lA_@|@[jAe@hAk@x@c@hAo@|@m@dAs@hAy@l@e@j@a@`@W^W|A}@|@a@z@a@l@U~@]|Bo@zBe@|@OpAMpAIdAExA?nBBrADlAH~@HnANjBXpB`@jBd@zBp@~@\\jAf@hBv@z@d@z@d@\\RjCdBD@bBnAb@^nBfBjAfAv@v@~AjBNPf@j@vAhBzAxBpDjF~@vA`@n@t@hAp@bAvCjErB|CnBtC~AbCx@jAbBhC`BfC`AxAlBpCvAtBtAxBv@pA\\j@`BtCtBbEbAvB^x@jAlCfApCb@hAz@bCr@pBhAtD@BTx@Vx@rA`FtArFnAdFjAxFDRbA~E|A|I|@pFz@~F^zCb@xD\\nCVfCp@|GXjD^lEZnENzBf@lIPzDT`GT~GFnCD~BFpDJpG@r@BfBFfBBz@JhBH~@Dp@Fr@NbBPzAHj@Fh@RrAN~@P`AVjALn@R~@\\vAXbAd@~AZ~@fAvCh@nA^v@l@jAv@xAn@bAn@`Ar@~@p@x@NRXX^`@ZZRR~@z@"
                                        },
                                        "start_location": {
                                            "lat": 51.2571908,
                                            "lng": -0.1250765
                                        },
                                        "travel_mode": "DRIVING"
                                    },
                                    {
                                        "distance": {
                                            "text": "25.3 km",
                                            "value": 25340
                                        },
                                        "duration": {
                                            "text": "15 mins",
                                            "value": 886
                                        },
                                        "end_location": {
                                            "lat": 50.8687712,
                                            "lng": -0.1572465
                                        },
                                        "html_instructions": "Continue onto <b>A23</b>",
                                        "polyline": {
                                            "points": "ofxvHpff@p@f@x@j@f@ZPLlAp@fCpAjAh@|@^|@\\n@RjA^n@Pn@N~@Rn@Jv@Jx@FnADl@@p@@`A?`CC~@?pA?n@@`A@\\@^@p@B`@B^Bv@D~AJlALn@H^D|ARfAPf@H~@Pn@LlAX|Bd@~@NnARnALn@Dn@@p@@^?V?TAp@C^C^C`AK^ENCj@I~AWz@QhB]vMgC`ASf@IjDq@~Cm@fASfBYl@Ip@Kr@IhCUhBIlCIjACvACfDIpDQnAI\\ElAMrImAjG}@rEk@fB_@hCc@tCe@r@MvAUb@IXIl@Qf@QVIl@W|CwANG`@ShAe@ZM^MZGl@GJ?hA@zB?nAGd@G~@Of@Ip@S`A]xD}Ah@On@Qf@MHCr@QVIx@Mv@MVERCpDc@`Iy@`DWxAKrAAnO_@|AGzCKxIQlCGrDI~BA\\ArBEh@ClAGdFU|AQjBYbCi@bB_@tBc@hB_@hB]ZG~@Od@ELA~@En@?\\?V@d@Fz@Hf@LVFZHB@HBLD~@^tAr@z@f@z@d@t@`@^Rb@R|@b@dAb@dA`@n@RbAZVHb@LfATf@JvAXZDd@Ft@H`@Db@Bx@BhA?r@AbAGbAGrAKhAMfAM~@Gv@Cx@Cd@?h@?hA?hADhABx@?|@?~@Af@Cd@Cj@Er@Er@Iz@K~AYbASjA[~@YdAYhA_@~@Wn@Qh@Mb@If@Id@Ib@E^E~@Ir@Eh@Cl@?|@B`A@x@Fz@H`ALdARpAX`A\\dBn@v@`@v@^fAl@l@^jCzA~@f@t@\\v@V^L|@VJBd@Hp@Jl@Dp@Db@@Z?R?JA`@Ap@Cx@IbAOl@M~@S~@W|@Ux@W~@W~@WlBe@h@Kj@I`@El@Gd@En@Cb@Al@?l@@x@DlAL|@Jp@LzA\\LDn@PfAZHBfAVdAT`@F^Fj@F`@F^Bz@Hl@@n@@r@@~@C`AC|@E|@Gj@Ex@If@IVEpAWd@Kf@K@?`@Kl@Q~@[r@WbAa@n@[z@c@VM^U`Ao@dAu@t@e@n@c@n@a@v@e@z@e@j@Yl@Yl@UTIb@Ol@QDAdA[^Ip@Q@?bAS\\In@M|@Q^G^G^Gn@Kl@I|@M`@Cl@G~@Ip@EhAIpAG~@C~@CnBAxEC|CC|@AfGAfJE`OGnCCdACn@AlBEnBI~AG`CO`BKlBK`BKnBO|AInBKnACv@Af@A`B@h@?t@@|@Dd@@h@DnAJnAL~@J|@J~@NlAPnAP~@L~AR~@NnAP~@L~AT|AT~BZ~AR~ATlAPnAPnANnAP|ATnANnANnAL~@Hn@FpALn@Dl@Dn@DvCNfBFnABnA@`A?lA?p@A~AC~@CnAElACpAE~AEnACnAEpAE~@AnAG~ACvAEfACv@CfACz@Ep@En@Gp@Gn@I^E|ASv@Of@IbASfAUj@OpA]lBk@z@[lAc@XM`Aa@vCiAfBu@t@W`@OxAe@fBe@|@U~@Q@?~@Qn@Kn@Gl@GXCf@E|@Gn@Cp@An@A~@A~@@Z@d@@`ADp@Fn@Dn@Fn@H~@L^Fl@J|ATx@HpAH^Bx@?T?^A|@Gb@GZEl@M\\I\\KNEZMNGJEPIZOd@WTOLILIXULK\\WNOVUX[Z]TWHMBCV]b@o@\\k@\\i@`@u@`@u@j@gAdAkBHOHMb@s@b@o@Za@V[V[XYZ]f@e@f@e@t@u@r@u@BEz@_Ar@}@R[NQV_@`@s@Vc@R_@JWTc@Re@Re@Rg@\\}@j@aBl@eBX{@b@sA`@oAVcAT}@R_ARaARkAHe@DUD_@NkATmBRoBp@gHNeBNcBTuBVgCNiAFg@\\oBXyAR_A^_Bl@yB`@yAXy@z@eCh@uAb@iAl@uA`AsBh@aAx@uAfBmCz@mAp@aAv@gAd@o@v@cAbAoAfAeAz@s@x@k@f@WLEb@Sh@SBA^K\\KRC`@I~@Gd@Cf@?j@?t@Db@Dz@Jt@Jv@Np@PpA\\lA\\lA\\hBp@zAl@xBz@jCdA`DpA~@\\nAb@bAXl@Nl@Jd@JhAPrBP|AHr@@fC?`BEnAIpAM~@Mx@Q|Be@pCo@hA[xCw@lCq@zAi@|@_@l@Wv@a@|@i@fAq@|@s@zAqAvE_En@i@dA_ApByAdBkA|@o@fAu@hDgC`As@r@o@bAeA|AeBb@e@"
                                        },
                                        "start_location": {
                                            "lat": 51.0834363,
                                            "lng": -0.2008854
                                        },
                                        "travel_mode": "DRIVING"
                                    },
                                    {
                                        "distance": {
                                            "text": "0.5 km",
                                            "value": 460
                                        },
                                        "duration": {
                                            "text": "1 min",
                                            "value": 32
                                        },
                                        "end_location": {
                                            "lat": 50.8686942,
                                            "lng": -0.1521289
                                        },
                                        "html_instructions": "Slight <b>left</b>",
                                        "maneuver": "turn-slight-left",
                                        "polyline": {
                                            "points": "yhnuHxu]F_@JSTc@FMN_@LUFMFMJYHWJ_@Lm@Hi@JaAD{@Fk@B_D?oBAu@Ca@CUC[GWIQKSIKIIIIIEA?KCKAM@I@KBUF"
                                        },
                                        "start_location": {
                                            "lat": 50.8687712,
                                            "lng": -0.1572465
                                        },
                                        "travel_mode": "DRIVING"
                                    },
                                    {
                                        "distance": {
                                            "text": "0.4 km",
                                            "value": 437
                                        },
                                        "duration": {
                                            "text": "1 min",
                                            "value": 24
                                        },
                                        "end_location": {
                                            "lat": 50.8679281,
                                            "lng": -0.1579367
                                        },
                                        "html_instructions": "At the roundabout, take the <b>1st</b> exit onto the <b>A27</b> ramp to <b>Worthing</b>",
                                        "maneuver": "roundabout-left",
                                        "polyline": {
                                            "points": "ihnuHxu\\A@?@A@?@A@A@K^KXCJCLERARA\\?Z@b@BbADfA@^Dl@L~ALbANjAXdBP`ADJJd@FXFXH`@J`@Rt@?@PnA"
                                        },
                                        "start_location": {
                                            "lat": 50.8686942,
                                            "lng": -0.1521289
                                        },
                                        "travel_mode": "DRIVING"
                                    },
                                    {
                                        "distance": {
                                            "text": "12.8 km",
                                            "value": 12751
                                        },
                                        "duration": {
                                            "text": "9 mins",
                                            "value": 521
                                        },
                                        "end_location": {
                                            "lat": 50.8367806,
                                            "lng": -0.3172206
                                        },
                                        "html_instructions": "Merge onto <b>A27</b>",
                                        "maneuver": "merge",
                                        "polyline": {
                                            "points": "qcnuHbz]FNPl@bBtFN`@L^lBnF|@|BvDbK|AbEjC~GfBvE`AfCj@|AvBbGd@pA`@bAhAnCz@hB`BdDZl@v@vAp@hA|BxDl@fAf@|@bAnBzA`Dp@~AbAfC~@jCZjANb@Pn@Pp@XlANt@f@lCd@jCTtARxAJr@h@~DLhANhAP~AJhAXrCJlAPxBJjAH|AFx@HdBDdAB`A@bA@fB@p@A\\?p@An@At@Ad@C`AGdAA\\GjAGt@MbBu@dKEn@KdBEf@Cd@GdBC~AAx@?l@?lA?v@@R@jABfA@ZFjABn@JbBDd@Db@Fv@Df@Fh@H|@LdAJx@RvATzAN`Ad@fCHf@|@dFP`A~AzInA`HRnAJl@VzAHr@LhAHx@Fh@Bh@Fr@Bd@@d@Bt@Bn@?p@@v@?hA?v@Cz@C|@IlBEx@Gz@MjACTIr@OdAKl@EZMj@Kl@Ol@GXOh@ERKZK`@cAtCKRYr@g@bAKRYf@GJWb@W^W`@o@~@_ApAa@n@U^m@fAWb@IR_@x@Sf@_@`AKZSp@Qj@GTOh@S~@Op@Ov@SpAM`AGf@MvAIdAC^Cp@En@A\\Ah@AXAp@?r@?hABtBBt@B|@FzAF~@FlAFl@Ft@Fp@LjAFb@Fd@Lt@F^Np@DRHZHVDRPj@Nd@JXRd@Td@P`@l@jA`@t@j@bAT^tCfF|AfCpBzCz@bANPbHtGZ\\^^n@l@XVZXZVt@n@TPTPPNRN`@^ZZXTXXt@r@d@f@~@bAd@h@NN^d@Z^Z`@TXTZLPNT^h@Xb@RZ`@n@V`@j@bAVb@P\\Vf@^v@`@x@P`@f@jA\\x@Rj@d@lAZ|@Nd@HVl@hBV`ADPFXFVLj@Jl@Jn@Jl@Fn@D\\LxA@VDn@Bn@@Z@l@@V?f@?V?Z?b@?ZA\\A\\Cr@A`@AXAVEp@KlBEj@MlBQxCQjCQtCGp@GlAIlBSvCMzBS~DMvCQlEO`FExAG`DG`DEfEEpDA~C?d@?f@?xE@xDBxCDzDF|CB|A@j@BhAHvCPpEHxB^~HVnETlDFbADj@Fp@Fh@Fn@RpBNtAD`@Hv@PnAJ`AZvBHl@Jr@Hd@@JTtAJr@Ln@d@lCRfATjAVrAn@tCPr@XhAXlAf@jBZdA^pAh@lBh@jBLb@b@xALf@z@fDRv@Np@T`Ab@vBRbANv@Hb@Lt@Lx@\\zBHl@Jx@PtAJ~@Hp@Hx@Hv@LdBLjAB`@N|ANdBJjAVxCDn@JdARvBFn@H|@NvAHt@HbAJ`A@BD^P|AP~ABZNvADVPdBDb@Hj@F`@F^N|@Nt@F\\Lj@Lr@ZbBFTF^RhAF\\F\\RpAV`BN`Ax@tF\\`CF^BTFZF\\DRDNDHLT"
                                        },
                                        "start_location": {
                                            "lat": 50.8679281,
                                            "lng": -0.1579367
                                        },
                                        "travel_mode": "DRIVING"
                                    },
                                    {
                                        "distance": {
                                            "text": "1.9 km",
                                            "value": 1876
                                        },
                                        "duration": {
                                            "text": "3 mins",
                                            "value": 185
                                        },
                                        "end_location": {
                                            "lat": 50.8208942,
                                            "lng": -0.3247061
                                        },
                                        "html_instructions": "At the roundabout, take the <b>1st</b> exit onto <b>Grinstead Ln</b>/<b>A2025</b><div style=\"font-size:0.9em\">Continue to follow A2025</div>",
                                        "maneuver": "roundabout-left",
                                        "polyline": {
                                            "points": "{`huHr}|@@?@?@@@?@?@@B?@B@@@@J@F@NHNHHHhALv@Hz@Jb@BNBf@Df@FHBPBJ@\\HrA\\fBf@`Cr@pBh@n@PVDz@FpALF@F@JBTB|Bd@nFnAp@Xf@P`@Lh@TVLf@Vh@^XRZVVPTPHF^Xt@v@j@r@b@n@h@r@^b@BDPRTRPJRHRJRDJ@L@Z?^AB?N@R@ZHfAd@v@\\?@JFJLHPHVN`@DLDJDHDHHFJFj@P~@V`@LzAd@nA`@h@NrA^d@JRBH@"
                                        },
                                        "start_location": {
                                            "lat": 50.8367806,
                                            "lng": -0.3172206
                                        },
                                        "travel_mode": "DRIVING"
                                    },
                                    {
                                        "distance": {
                                            "text": "2.6 km",
                                            "value": 2594
                                        },
                                        "duration": {
                                            "text": "4 mins",
                                            "value": 266
                                        },
                                        "end_location": {
                                            "lat": 50.8126674,
                                            "lng": -0.358358
                                        },
                                        "html_instructions": "At the roundabout, take the <b>3rd</b> exit onto <b>Brighton Rd</b>/<b>A259</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                        "maneuver": "roundabout-left",
                                        "polyline": {
                                            "points": "q}duHll~@?A?A?A?A?A?A?A@??A?A@??A@?@??A@?@??@@?@??@@??@?@@??@?@?@@??@?@?@?@A@?@?@A@L\\j@pBZjAl@xBb@tALd@FPLf@@B@@Pr@Hf@@XFj@Hv@BRDTDTHXHXN\\Zn@\\v@\\x@JVXv@Z`ANh@XlADXFLDXHVJXFHbAtEh@nBJZRv@`@fBVrA^lBVrATxAZfBLr@?@l@hDHj@@F?F@PJl@P`AF^NpA\\rCNtAJv@Hl@ZlBn@jDb@bCJd@Fb@Jt@`@dDD^z@xH\\bD\\|CD\\NdARtBBJH`AZ~CJv@Jd@BNLRf@rAL^FTBVBX?V?D@VBbA?dA@`@BlH?TBnBJvDP|D@H@NJ~BFrA"
                                        },
                                        "start_location": {
                                            "lat": 50.8208942,
                                            "lng": -0.3247061
                                        },
                                        "travel_mode": "DRIVING"
                                    }
                                ],
                                "traffic_speed_entry": [],
                                "via_waypoint": []
                            }
                        ],
                        "overview_polyline": {
                            "points": "}~}wH~pg@iB}EsAk@_BqAwBzJiA|C{DdGvAjNa@dXX~Cbm@gZxQoJzBaDbJoXf@sEZ{AhAgD~@yAxGkFxW{RpBwAt@o@l@mCTcCGyA}F{`@mHc[a@cCmCoIyGuOyFoOqEeQkCaOiCgTcBoVc@cRBwOj@gMdAqJ|DgSfFoYfCyXn@yNL}Nj@g`@MmRXsGrAaEvHyNzA}AjCmAbCM|HXjFi@bEaA`DaArOcHfS_LpIqF|LcIrJ_DpEm@rFInLhArM~@tJi@bLsC`P{FlJq@rKfA~JfElRjPvLdItOtGfd@nKlf@jP`ElAxGfAhEP`HMlO{CxNoCrK}@tMKxMb@n`AnDho@jCzJtAbO~EnNxIvLjJzJbFlOtDtOnBlQnA~X~@`PvBni@pP|XlFjLjAzOt@vKC~D]zHgBlGqCvGkE`LoGvJcCbI]pI\\xKpBpJnD`HdE|FxErF|FvQpW|Wz`@rIrMxH|NrKrY|L|g@vFj^jCnVdBdUdBj`@r@r_@vAdPfDlPrDfKtD`HnGzHrEjDrHzDfMrDnFZtHAtJRbO~AjQvC`HIzZoFdUaEr\\wA`f@yGlMkC~KuE~FE|Ei@lNuEjYeDrq@eBzHM|NiArTiEzCG`D`@`HxCnLlFhK|BtDVdGQfNw@bN?nEa@nHcBzKoCnKY|Fr@pHhCfOtH`I~@~IcAzNqD~IQhL|BxJzAzLU|HuAhKkE|LwHnHcCbI_B|JgA`Ye@tq@i@pYaBtMBre@dGzc@dF`UV`Si@jQe@`LsAzOqExSkHpIiApKKpKfAhGl@lDIdFmAjDqBhDiDjF{IlFgInHuHhE{GbFyMxDyOvCqYpDyUdDsK|DiJnMqR`GuFbCeAdGs@`EVpFjAhYlKnFxA`Ix@lJMhIsAbOuD~FcC~UeRtKyHvGoGzBoErAuHHqJSkBkAoAgAPa@lAA~GdBpNvAdH~Nfb@~Rzh@bGlMtGbLxFnLnDbKdEnTvCrWdAnSGvLoBdZW`Of@hMrAbMtIrf@dBdNVxKq@vN}AdJ_E|KeF~H{ErJ}BbJoAzM?|L`AhOnAxG|CxHxF`KzGxJvOzNbEnDhH`IxDvFxEbJbFdN~A|Hj@hJq@pTqB|\\_Blj@Bhc@vAtc@fBjVnBzOjClOpFxTrFpS`DdQfEtc@rDp^xErXhC|P`@p@XJrGfAxFbAjKvClD\\rOxDvFjD|FzGnCrAnA?nDnAfA|BjG`CpG`B?E@EFGFB?XtDpM~@`FxAxFlDtKdDdMdEjT`Gda@dEf\\|B|SbBdGJdPx@rU"
                        },
                        "summary": "M23 and A23",
                        "warnings": [],
                        "waypoint_order": []
                    }
                ],
                "status": "OK"
            },
            distance: {
                "destination_addresses": [
                    "Brighton Rd, Worthing BN11 2ES, UK"
                ],
                "origin_addresses": [
                    "Tadworth KT20 6RP, UK"
                ],
                "rows": [
                    {
                        "elements": [
                            {
                                "distance": {
                                    "text": "75.7 km",
                                    "value": 75706
                                },
                                "duration": {
                                    "text": "58 mins",
                                    "value": 3477
                                },
                                "duration_in_traffic": {
                                    "text": "59 mins",
                                    "value": 3529
                                },
                                "status": "OK"
                            }
                        ]
                    }
                ],
                "status": "OK"
            }
        };

        const KEY = `travel-time`;

        const now = moment();

        const cached = localStorage.getItem(KEY);

        if (cached) {
            try {
                const parsed = JSON.parse(cached);

                if (parsed.origin === origin && parsed.destination === destination/* && moment(parsed.checked).isAfter(now.subtract(5, 'm'))*/) {
                    console.log('cached', parsed);
                    return parsed;
                }

            } catch (e) {
                // Nothing
            }
        }

        try {
            let distance = this.maps_client.distanceMatrix({
                origins: origin,
                destinations: destination,
                mode: 'driving',
                departure_time: '17:30'
            });

            console.log(distance);

            distance = {
                ...distance,
                checked: now.toISOString(),
                origin,
                destination
            };

            //localStorage.setItem(KEY, JSON.stringify(distance));

            return distance;
        } catch (e) {
            throw e;
        }
    }
}