                                    var myInfo = "<p>My Name is {{name}} and I live at {{street}} in {{city}}, {{state}}</p>";
                                        
                                    var template = Handlebars.compile(myInfo);
                                        
                                    var data = template({name: "Elijah", street: "123 Main St", city: "Pittsburgh", state: "PA"});
                                        
                                    document.getElementById("testData").innerHTML += data;