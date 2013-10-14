console.log("embed.js");

(function(global) {

    var host = "https://s3.amazonaws.com/bokeh_docs/0.2/";
    var bokehUrl = host + 'js/application.js';


    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "1b11e0cd-1493-4f9c-a0cc-c6c376223e6b"}, "doc": null, "dimension": 0, "id": "0ba98767-90f5-484c-a282-58e7badebeb8"}, "type": "Grid", "id": "0ba98767-90f5-484c-a282-58e7badebeb8"}, {"attributes": {"plot": {"type": "Plot", "id": "3a52648e-6eb1-4031-adf9-5b5673b1fb2a"}, "doc": null, "dimension": 0, "id": "f10f90db-bd42-48cd-a016-8e2db96c57d8"}, "type": "Grid", "id": "f10f90db-bd42-48cd-a016-8e2db96c57d8"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "d39bbf14-cbcb-4668-9438-51c3b1d651de"}, {"type": "DataRange1d", "id": "5f19f32e-05c1-45d8-a252-0cfdd022ac4b"}], "dimensions": ["width", "height"], "doc": null, "id": "3643e9e6-7621-4793-94eb-70550322f408"}, "type": "PanTool", "id": "3643e9e6-7621-4793-94eb-70550322f408"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "d39bbf14-cbcb-4668-9438-51c3b1d651de"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "5f19f32e-05c1-45d8-a252-0cfdd022ac4b"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "a1c0533e-11b9-4692-bfcf-8aa789fa3266"}, {"type": "LinearAxis", "id": "0922b2f9-b27b-4fd3-8791-96370363fd75"}, {"type": "Grid", "id": "f10f90db-bd42-48cd-a016-8e2db96c57d8"}, {"type": "Grid", "id": "942c6520-ff69-4763-9d09-06d417592605"}, {"type": "GlyphRenderer", "id": "219bbf56-b6da-430b-be5a-4c3e82cc4adc"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "3a52648e-6eb1-4031-adf9-5b5673b1fb2a", "tools": [{"type": "PanTool", "id": "3643e9e6-7621-4793-94eb-70550322f408"}, {"type": "ZoomTool", "id": "12494bfd-2769-4c7c-88ec-0cd03ff2484e"}, {"type": "ResizeTool", "id": "26dd9dfb-c75e-44d5-b05f-c8dce189a28f"}], "canvas_width": 600}, "type": "Plot", "id": "3a52648e-6eb1-4031-adf9-5b5673b1fb2a"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "65fa8dbb-99bc-4bbd-abfa-32928ce3b3be"}, {"type": "Plot", "id": "1b11e0cd-1493-4f9c-a0cc-c6c376223e6b"}, {"type": "Plot", "id": "3a52648e-6eb1-4031-adf9-5b5673b1fb2a"}, {"type": "Plot", "id": "scatter_example"}], "id": "79e59c09-c9ab-4caa-b034-4c332371491b"}, "type": "PlotContext", "id": "79e59c09-c9ab-4caa-b034-4c332371491b"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "fc19010f-5cd7-4d80-9e77-4d60dcae0701"}, "columns": ["x"]}], "id": "d39bbf14-cbcb-4668-9438-51c3b1d651de", "doc": null}, "type": "DataRange1d", "id": "d39bbf14-cbcb-4668-9438-51c3b1d651de"}, {"attributes": {"plot": {"type": "Plot", "id": "65fa8dbb-99bc-4bbd-abfa-32928ce3b3be"}, "doc": null, "dimension": 1, "id": "702acab6-f6ca-48bd-8b54-cda346a312df"}, "type": "Grid", "id": "702acab6-f6ca-48bd-8b54-cda346a312df"}, {"attributes": {"plot": {"type": "Plot", "id": "3a52648e-6eb1-4031-adf9-5b5673b1fb2a"}, "id": "26dd9dfb-c75e-44d5-b05f-c8dce189a28f", "doc": null}, "type": "ResizeTool", "id": "26dd9dfb-c75e-44d5-b05f-c8dce189a28f"}, {"attributes": {"plot": {"type": "Plot", "id": "1b11e0cd-1493-4f9c-a0cc-c6c376223e6b"}, "location": "min", "bounds": "auto", "doc": null, "id": "71071844-174f-4fae-b887-9217530ac920", "dimension": 0}, "type": "LinearAxis", "id": "71071844-174f-4fae-b887-9217530ac920"}, {"attributes": {"plot": {"type": "Plot", "id": "1b11e0cd-1493-4f9c-a0cc-c6c376223e6b"}, "location": "min", "bounds": "auto", "doc": null, "id": "cf862170-3a51-47f0-a474-a255c597cd38", "dimension": 1}, "type": "LinearAxis", "id": "cf862170-3a51-47f0-a474-a255c597cd38"}, {"attributes": {"plot": {"type": "Plot", "id": "3a52648e-6eb1-4031-adf9-5b5673b1fb2a"}, "location": "min", "bounds": "auto", "doc": null, "id": "a1c0533e-11b9-4692-bfcf-8aa789fa3266", "dimension": 0}, "type": "LinearAxis", "id": "a1c0533e-11b9-4692-bfcf-8aa789fa3266"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "location": "min", "bounds": "auto", "doc": null, "id": "800810e7-4b48-4898-b27f-5fbf147b1796", "dimension": 1}, "type": "LinearAxis", "id": "800810e7-4b48-4898-b27f-5fbf147b1796"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "location": "min", "bounds": "auto", "doc": null, "id": "117ad3f7-a054-4d08-b89e-63c962e8c7ba", "dimension": 0}, "type": "LinearAxis", "id": "117ad3f7-a054-4d08-b89e-63c962e8c7ba"}, {"attributes": {"plot": {"type": "Plot", "id": "3a52648e-6eb1-4031-adf9-5b5673b1fb2a"}, "location": "min", "bounds": "auto", "doc": null, "id": "0922b2f9-b27b-4fd3-8791-96370363fd75", "dimension": 1}, "type": "LinearAxis", "id": "0922b2f9-b27b-4fd3-8791-96370363fd75"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "fc19010f-5cd7-4d80-9e77-4d60dcae0701"}, "columns": ["y"]}], "id": "5f19f32e-05c1-45d8-a252-0cfdd022ac4b", "doc": null}, "type": "DataRange1d", "id": "5f19f32e-05c1-45d8-a252-0cfdd022ac4b"}, {"attributes": {"plot": {"type": "Plot", "id": "65fa8dbb-99bc-4bbd-abfa-32928ce3b3be"}, "location": "min", "bounds": "auto", "doc": null, "id": "3e091641-6b7e-487f-b467-946df9d0ab8e", "dimension": 0}, "type": "LinearAxis", "id": "3e091641-6b7e-487f-b467-946df9d0ab8e"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "f7f1dcaf-2997-40c4-8e3d-3c099a4cc497"}, "columns": ["y"]}], "id": "82eb8c9a-bee5-4c86-8a58-f344fb1b3418", "doc": null}, "type": "DataRange1d", "id": "82eb8c9a-bee5-4c86-8a58-f344fb1b3418"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "d7a0ffd3-7761-479d-ba55-134e55b11de7"}, "doc": null, "id": "644bc7d5-1ee3-478a-a4db-a74265f90514", "xdata_range": {"type": "DataRange1d", "id": "6db44417-b4b3-4636-923d-73255d2fea36"}, "ydata_range": {"type": "DataRange1d", "id": "c4ac8190-2725-4dfa-b5eb-797bb80bb8e3"}, "glyphspec": {"line_color": {"value": "blue"}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "blue"}, "tools": "pan,zoom,resize", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "size": {"units": "screen", "field": null, "default": 4}, "type": "square", "name": "scatter_example"}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "angle": {"units": "data", "field": "angle"}, "radius_units": "screen", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "square", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "644bc7d5-1ee3-478a-a4db-a74265f90514"}, {"attributes": {"plot": {"type": "Plot", "id": "1b11e0cd-1493-4f9c-a0cc-c6c376223e6b"}, "id": "1dd1aae5-c82d-462c-87e8-33c34070cf7f", "doc": null}, "type": "ResizeTool", "id": "1dd1aae5-c82d-462c-87e8-33c34070cf7f"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "de38254b-0f1d-438a-bd11-925546eca07d"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "61af2823-84b0-4ef6-8746-b372fea8dd3c"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "71071844-174f-4fae-b887-9217530ac920"}, {"type": "LinearAxis", "id": "cf862170-3a51-47f0-a474-a255c597cd38"}, {"type": "Grid", "id": "0ba98767-90f5-484c-a282-58e7badebeb8"}, {"type": "Grid", "id": "1cdececc-3155-4543-bcf8-5a52867da683"}, {"type": "GlyphRenderer", "id": "3be8fa70-239e-4caf-a767-564185a18eeb"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "1b11e0cd-1493-4f9c-a0cc-c6c376223e6b", "tools": [{"type": "PanTool", "id": "3443fc21-1ccc-44d5-a5e4-0e599e77a967"}, {"type": "ZoomTool", "id": "1e59ab9e-9787-49b9-8166-401743e2f3d3"}, {"type": "ResizeTool", "id": "1dd1aae5-c82d-462c-87e8-33c34070cf7f"}], "canvas_width": 600}, "type": "Plot", "id": "1b11e0cd-1493-4f9c-a0cc-c6c376223e6b"}, {"attributes": {"plot": {"type": "Plot", "id": "65fa8dbb-99bc-4bbd-abfa-32928ce3b3be"}, "location": "min", "bounds": "auto", "doc": null, "id": "a9c6f708-867f-42e3-810e-ecb9bdadb60f", "dimension": 1}, "type": "LinearAxis", "id": "a9c6f708-867f-42e3-810e-ecb9bdadb60f"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "de38254b-0f1d-438a-bd11-925546eca07d"}, {"type": "DataRange1d", "id": "61af2823-84b0-4ef6-8746-b372fea8dd3c"}], "dimensions": ["width", "height"], "doc": null, "id": "3443fc21-1ccc-44d5-a5e4-0e599e77a967"}, "type": "PanTool", "id": "3443fc21-1ccc-44d5-a5e4-0e599e77a967"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "645fa1cb-7018-477d-b81a-494df0a7fb73"}, "doc": null, "id": "3be8fa70-239e-4caf-a767-564185a18eeb", "xdata_range": {"type": "DataRange1d", "id": "de38254b-0f1d-438a-bd11-925546eca07d"}, "ydata_range": {"type": "DataRange1d", "id": "61af2823-84b0-4ef6-8746-b372fea8dd3c"}, "glyphspec": {"line_color": {"value": "red"}, "fill_color": {"value": "red"}, "tools": "pan,zoom,resize", "radius": {"units": "screen", "field": null, "default": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "red"}, "angle_units": "deg", "fill_color": {"value": "red"}, "visible": null, "radius": {"units": "screen", "default": 4, "field": null}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "3be8fa70-239e-4caf-a767-564185a18eeb"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "6db44417-b4b3-4636-923d-73255d2fea36"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "c4ac8190-2725-4dfa-b5eb-797bb80bb8e3"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "117ad3f7-a054-4d08-b89e-63c962e8c7ba"}, {"type": "LinearAxis", "id": "800810e7-4b48-4898-b27f-5fbf147b1796"}, {"type": "Grid", "id": "46301ec2-fe73-439d-a870-93deab0aedba"}, {"type": "Grid", "id": "316644d8-efd5-4cf6-8e4a-add99688003a"}, {"type": "GlyphRenderer", "id": "644bc7d5-1ee3-478a-a4db-a74265f90514"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "scatter_example", "tools": [{"type": "PanTool", "id": "5c31b05a-76bf-45a4-b4fd-3af868bdfba6"}, {"type": "ZoomTool", "id": "cef4cc12-93b3-494c-8777-e14c393f0d3a"}, {"type": "ResizeTool", "id": "08d6b352-6122-43a5-984a-2cf8525ea112"}], "canvas_width": 600}, "type": "Plot", "id": "scatter_example"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "24f52efb-63b0-4174-a9d7-b8ce6ef4603a"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "82eb8c9a-bee5-4c86-8a58-f344fb1b3418"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "3e091641-6b7e-487f-b467-946df9d0ab8e"}, {"type": "LinearAxis", "id": "a9c6f708-867f-42e3-810e-ecb9bdadb60f"}, {"type": "Grid", "id": "7b9de079-3cc8-4618-bd29-79227aacdd3b"}, {"type": "Grid", "id": "702acab6-f6ca-48bd-8b54-cda346a312df"}, {"type": "GlyphRenderer", "id": "3f86a3db-60e8-417c-a6c8-8f8c02bbaec5"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "65fa8dbb-99bc-4bbd-abfa-32928ce3b3be", "tools": [{"type": "PanTool", "id": "57f246c1-3f92-40fc-97ce-d2f54834d8ac"}, {"type": "ZoomTool", "id": "b26a9813-b3a7-4dfc-bd2c-553295885172"}, {"type": "ResizeTool", "id": "658f2867-2c4e-4db8-8696-af2229cc71a6"}], "canvas_width": 600}, "type": "Plot", "id": "65fa8dbb-99bc-4bbd-abfa-32928ce3b3be"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d7a0ffd3-7761-479d-ba55-134e55b11de7"}, "columns": ["x"]}], "id": "6db44417-b4b3-4636-923d-73255d2fea36", "doc": null}, "type": "DataRange1d", "id": "6db44417-b4b3-4636-923d-73255d2fea36"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542584, 0.6667690005162916, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806785, -0.15800139597335008, -0.28173255684142984, -0.40093053540661383, -0.5136773915734064, -0.6181589862206053, -0.7126941713788628, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.814575952050336, -0.7345917086575331, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656491, 0.18925124436041013, 0.31203344569848745, 0.42979491208917153, 0.5406408174555979, 0.6427876096865393, 0.7345917086575334, 0.8145759520503355, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734056, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418284, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627709, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.486196736100469, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "f7f1dcaf-2997-40c4-8e3d-3c099a4cc497"}, "type": "ColumnDataSource", "id": "f7f1dcaf-2997-40c4-8e3d-3c099a4cc497"}, {"attributes": {"plot": {"type": "Plot", "id": "1b11e0cd-1493-4f9c-a0cc-c6c376223e6b"}, "doc": null, "dimension": 1, "id": "1cdececc-3155-4543-bcf8-5a52867da683"}, "type": "Grid", "id": "1cdececc-3155-4543-bcf8-5a52867da683"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542584, 0.6667690005162916, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806785, -0.15800139597335008, -0.28173255684142984, -0.40093053540661383, -0.5136773915734064, -0.6181589862206053, -0.7126941713788628, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.814575952050336, -0.7345917086575331, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656491, 0.18925124436041013, 0.31203344569848745, 0.42979491208917153, 0.5406408174555979, 0.6427876096865393, 0.7345917086575334, 0.8145759520503355, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734056, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418284, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627709, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.486196736100469, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "fc19010f-5cd7-4d80-9e77-4d60dcae0701"}, "type": "ColumnDataSource", "id": "fc19010f-5cd7-4d80-9e77-4d60dcae0701"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "6db44417-b4b3-4636-923d-73255d2fea36"}, {"type": "DataRange1d", "id": "c4ac8190-2725-4dfa-b5eb-797bb80bb8e3"}], "dimensions": ["width", "height"], "doc": null, "id": "5c31b05a-76bf-45a4-b4fd-3af868bdfba6"}, "type": "PanTool", "id": "5c31b05a-76bf-45a4-b4fd-3af868bdfba6"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d7a0ffd3-7761-479d-ba55-134e55b11de7"}, "columns": ["y"]}], "id": "c4ac8190-2725-4dfa-b5eb-797bb80bb8e3", "doc": null}, "type": "DataRange1d", "id": "c4ac8190-2725-4dfa-b5eb-797bb80bb8e3"}, {"attributes": {"plot": {"type": "Plot", "id": "65fa8dbb-99bc-4bbd-abfa-32928ce3b3be"}, "doc": null, "dimension": 0, "id": "7b9de079-3cc8-4618-bd29-79227aacdd3b"}, "type": "Grid", "id": "7b9de079-3cc8-4618-bd29-79227aacdd3b"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "24f52efb-63b0-4174-a9d7-b8ce6ef4603a"}, {"type": "DataRange1d", "id": "82eb8c9a-bee5-4c86-8a58-f344fb1b3418"}], "dimensions": ["width", "height"], "doc": null, "id": "57f246c1-3f92-40fc-97ce-d2f54834d8ac"}, "type": "PanTool", "id": "57f246c1-3f92-40fc-97ce-d2f54834d8ac"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "24f52efb-63b0-4174-a9d7-b8ce6ef4603a"}, {"type": "DataRange1d", "id": "82eb8c9a-bee5-4c86-8a58-f344fb1b3418"}], "dimensions": ["width", "height"], "id": "b26a9813-b3a7-4dfc-bd2c-553295885172"}, "type": "ZoomTool", "id": "b26a9813-b3a7-4dfc-bd2c-553295885172"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "f7f1dcaf-2997-40c4-8e3d-3c099a4cc497"}, "doc": null, "id": "3f86a3db-60e8-417c-a6c8-8f8c02bbaec5", "xdata_range": {"type": "DataRange1d", "id": "24f52efb-63b0-4174-a9d7-b8ce6ef4603a"}, "ydata_range": {"type": "DataRange1d", "id": "82eb8c9a-bee5-4c86-8a58-f344fb1b3418"}, "glyphspec": {"line_color": {"value": "#FF00FF"}, "fill_color": {"value": "#FF00FF"}, "tools": "pan,zoom,resize", "radius": {"units": "screen", "field": null, "default": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "#FF00FF"}, "angle_units": "deg", "fill_color": {"value": "#FF00FF"}, "visible": null, "radius": {"units": "screen", "default": 4, "field": null}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "3f86a3db-60e8-417c-a6c8-8f8c02bbaec5"}, {"attributes": {"plot": {"type": "Plot", "id": "3a52648e-6eb1-4031-adf9-5b5673b1fb2a"}, "doc": null, "dimension": 1, "id": "942c6520-ff69-4763-9d09-06d417592605"}, "type": "Grid", "id": "942c6520-ff69-4763-9d09-06d417592605"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "id": "08d6b352-6122-43a5-984a-2cf8525ea112", "doc": null}, "type": "ResizeTool", "id": "08d6b352-6122-43a5-984a-2cf8525ea112"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "doc": null, "dimension": 0, "id": "46301ec2-fe73-439d-a870-93deab0aedba"}, "type": "Grid", "id": "46301ec2-fe73-439d-a870-93deab0aedba"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542584, 0.6667690005162916, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806785, -0.15800139597335008, -0.28173255684142984, -0.40093053540661383, -0.5136773915734064, -0.6181589862206053, -0.7126941713788628, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.814575952050336, -0.7345917086575331, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656491, 0.18925124436041013, 0.31203344569848745, 0.42979491208917153, 0.5406408174555979, 0.6427876096865393, 0.7345917086575334, 0.8145759520503355, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734056, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418284, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627709, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.486196736100469, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "645fa1cb-7018-477d-b81a-494df0a7fb73"}, "type": "ColumnDataSource", "id": "645fa1cb-7018-477d-b81a-494df0a7fb73"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.0, 0.12659245357374926, 0.2511479871810792, 0.3716624556603276, 0.4861967361004687, 0.5929079290546404, 0.690079011482112, 0.7761464642917568, 0.8497254299495144, 0.9096319953545183, 0.9549022414440739, 0.984807753012208, 0.998867339183008, 0.9968547759519424, 0.9788024462147787, 0.9450008187146685, 0.8959937742913359, 0.8325698546347714, 0.7557495743542584, 0.6667690005162916, 0.5670598638627709, 0.4582265217274105, 0.3420201433256689, 0.2203105327865408, 0.09505604330418244, -0.03172793349806785, -0.15800139597335008, -0.28173255684142984, -0.40093053540661383, -0.5136773915734064, -0.6181589862206053, -0.7126941713788628, -0.7957618405308321, -0.8660254037844388, -0.9223542941045814, -0.9638421585599422, -0.9898214418809327, -0.9998741276738751, -0.9938384644612541, -0.9718115683235417, -0.9341478602651068, -0.881453363447582, -0.814575952050336, -0.7345917086575331, -0.6427876096865396, -0.5406408174555974, -0.4297949120891719, -0.31203344569848707, -0.18925124436040974, -0.06342391965656452, 0.06342391965656491, 0.18925124436041013, 0.31203344569848745, 0.42979491208917153, 0.5406408174555979, 0.6427876096865393, 0.7345917086575334, 0.8145759520503355, 0.8814533634475821, 0.9341478602651067, 0.9718115683235418, 0.9938384644612541, 0.9998741276738751, 0.9898214418809328, 0.963842158559942, 0.9223542941045816, 0.8660254037844383, 0.7957618405308319, 0.7126941713788629, 0.6181589862206056, 0.5136773915734056, 0.40093053540661344, 0.2817325568414299, 0.15800139597335056, 0.03172793349806701, -0.09505604330418284, -0.22031053278654034, -0.342020143325668, -0.45822652172741085, -0.5670598638627709, -0.6667690005162913, -0.7557495743542588, -0.8325698546347716, -0.8959937742913359, -0.9450008187146683, -0.9788024462147789, -0.9968547759519424, -0.998867339183008, -0.9848077530122081, -0.9549022414440737, -0.9096319953545183, -0.8497254299495145, -0.7761464642917573, -0.6900790114821116, -0.5929079290546404, -0.486196736100469, -0.3716624556603267, -0.2511479871810788, -0.1265924535737493, -4.898587196589413e-16], "x": [0.0, 0.12693303650867852, 0.25386607301735703, 0.3807991095260356, 0.5077321460347141, 0.6346651825433925, 0.7615982190520711, 0.8885312555607496, 1.0154642920694281, 1.1423973285781066, 1.269330365086785, 1.3962634015954636, 1.5231964381041423, 1.6501294746128208, 1.7770625111214993, 1.9039955476301778, 2.0309285841388562, 2.1578616206475347, 2.284794657156213, 2.4117276936648917, 2.53866073017357, 2.6655937666822487, 2.792526803190927, 2.9194598396996057, 3.0463928762082846, 3.173325912716963, 3.3002589492256416, 3.42719198573432, 3.5541250222429985, 3.681058058751677, 3.8079910952603555, 3.934924131769034, 4.0618571682777125, 4.188790204786391, 4.3157232412950695, 4.442656277803748, 4.569589314312426, 4.696522350821105, 4.823455387329783, 4.950388423838462, 5.07732146034714, 5.204254496855819, 5.331187533364497, 5.458120569873176, 5.585053606381854, 5.711986642890533, 5.838919679399211, 5.96585271590789, 6.092785752416569, 6.219718788925247, 6.346651825433926, 6.473584861942604, 6.600517898451283, 6.727450934959961, 6.85438397146864, 6.981317007977318, 7.108250044485997, 7.235183080994675, 7.362116117503354, 7.489049154012032, 7.615982190520711, 7.742915227029389, 7.869848263538068, 7.996781300046746, 8.123714336555425, 8.250647373064103, 8.377580409572783, 8.50451344608146, 8.631446482590139, 8.758379519098817, 8.885312555607497, 9.012245592116175, 9.139178628624853, 9.266111665133531, 9.39304470164221, 9.519977738150889, 9.646910774659567, 9.773843811168245, 9.900776847676925, 10.027709884185603, 10.15464292069428, 10.28157595720296, 10.408508993711639, 10.535442030220317, 10.662375066728995, 10.789308103237675, 10.916241139746353, 11.04317417625503, 11.170107212763709, 11.297040249272388, 11.423973285781067, 11.550906322289745, 11.677839358798423, 11.804772395307102, 11.93170543181578, 12.058638468324459, 12.185571504833138, 12.312504541341816, 12.439437577850494, 12.566370614359172]}, "id": "d7a0ffd3-7761-479d-ba55-134e55b11de7"}, "type": "ColumnDataSource", "id": "d7a0ffd3-7761-479d-ba55-134e55b11de7"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "de38254b-0f1d-438a-bd11-925546eca07d"}, {"type": "DataRange1d", "id": "61af2823-84b0-4ef6-8746-b372fea8dd3c"}], "dimensions": ["width", "height"], "id": "1e59ab9e-9787-49b9-8166-401743e2f3d3"}, "type": "ZoomTool", "id": "1e59ab9e-9787-49b9-8166-401743e2f3d3"}, {"attributes": {"plot": {"type": "Plot", "id": "65fa8dbb-99bc-4bbd-abfa-32928ce3b3be"}, "id": "658f2867-2c4e-4db8-8696-af2229cc71a6", "doc": null}, "type": "ResizeTool", "id": "658f2867-2c4e-4db8-8696-af2229cc71a6"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "d39bbf14-cbcb-4668-9438-51c3b1d651de"}, {"type": "DataRange1d", "id": "5f19f32e-05c1-45d8-a252-0cfdd022ac4b"}], "dimensions": ["width", "height"], "id": "12494bfd-2769-4c7c-88ec-0cd03ff2484e"}, "type": "ZoomTool", "id": "12494bfd-2769-4c7c-88ec-0cd03ff2484e"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "6db44417-b4b3-4636-923d-73255d2fea36"}, {"type": "DataRange1d", "id": "c4ac8190-2725-4dfa-b5eb-797bb80bb8e3"}], "dimensions": ["width", "height"], "id": "cef4cc12-93b3-494c-8777-e14c393f0d3a"}, "type": "ZoomTool", "id": "cef4cc12-93b3-494c-8777-e14c393f0d3a"}, {"attributes": {"plot": {"type": "Plot", "id": "scatter_example"}, "doc": null, "dimension": 1, "id": "316644d8-efd5-4cf6-8e4a-add99688003a"}, "type": "Grid", "id": "316644d8-efd5-4cf6-8e4a-add99688003a"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "645fa1cb-7018-477d-b81a-494df0a7fb73"}, "columns": ["y"]}], "id": "61af2823-84b0-4ef6-8746-b372fea8dd3c", "doc": null}, "type": "DataRange1d", "id": "61af2823-84b0-4ef6-8746-b372fea8dd3c"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "645fa1cb-7018-477d-b81a-494df0a7fb73"}, "columns": ["x"]}], "id": "de38254b-0f1d-438a-bd11-925546eca07d", "doc": null}, "type": "DataRange1d", "id": "de38254b-0f1d-438a-bd11-925546eca07d"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "f7f1dcaf-2997-40c4-8e3d-3c099a4cc497"}, "columns": ["x"]}], "id": "24f52efb-63b0-4174-a9d7-b8ce6ef4603a", "doc": null}, "type": "DataRange1d", "id": "24f52efb-63b0-4174-a9d7-b8ce6ef4603a"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "fc19010f-5cd7-4d80-9e77-4d60dcae0701"}, "doc": null, "id": "219bbf56-b6da-430b-be5a-4c3e82cc4adc", "xdata_range": {"type": "DataRange1d", "id": "d39bbf14-cbcb-4668-9438-51c3b1d651de"}, "ydata_range": {"type": "DataRange1d", "id": "5f19f32e-05c1-45d8-a252-0cfdd022ac4b"}, "glyphspec": {"line_color": {"value": "green"}, "angle": {"units": "data", "field": "angle"}, "fill_color": {"value": "green"}, "tools": "pan,zoom,resize", "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "square", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "end_angle_units": "deg", "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "angle": {"units": "data", "field": "angle"}, "radius_units": "screen", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "square", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "GlyphRenderer", "id": "219bbf56-b6da-430b-be5a-4c3e82cc4adc"}];
    var modeltype = "PlotContext";
    var elementid = "524591ef-7e9d-4e3b-8e26-17c46fa0b907";
    var plotID = "scatter_example";
    var dd = {};
    dd[plotID] = all_models;


    function addEvent(el, eventName, func){
        if(el.attachEvent){
            return el.attachEvent('on' + eventName, func);}
        else {
            el.addEventListener(eventName, func, false);}}
    
    var bokeh_defined = !(typeof(_embed_bokeh_inject_application) == "undefined");
    
    var script_injected = bokeh_defined && _embed_bokeh_inject_application;
    /*
    console.log(
        "plotID", plotID,
        "bokeh_defined", bokeh_defined, 
        "script_injected", script_injected,
        "typeof rrequire", typeof rrequire);
    */
    if(typeof rrequire == "function"){
        // application.js is already loaded
        console.log("application.js is already loaded, going straight to plotting");
        embed_core = rrequire("./embed_core");
        embed_core.search_and_plot(dd);
    }
    else {
        // application.js isn't loaded and it hasn't been scheduled to be injected
        if(!script_injected){ 
            var s = document.createElement('script');
            s.async = true; s.src = bokehUrl; s.id="embed.js"}
        else {
            // in this case, the script block for application.js has been
            // injected, but it hasn't yet loaded.
            var s = document.getElementById('embed.js');
        }

        _embed_bokeh_inject_application = true;
        addEvent(
            s,'load', 
            function() {
                console.log("application.js loaded callback");
                embed_core = rrequire("./embed_core");
                console.log("embed_core loaded")
                embed_core.search_and_plot(dd);
                embed_core.injectCss(host);
                console.log("search_and_plot called");
            });
        document.body.appendChild(s);        
    }

    window._embed_bokeh = true;
}(this));
