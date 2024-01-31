const line = {
    'A': {
        node: ['sequence_design', 'cloning', 'PCR', 'IVT', 'circularization', 'circRNA_enrichment'],
        line: ['line1', 'line28', 'line7', 'line8', 'line9', 'line10', 'line11'],
        color: "#000000",
    },
    'B': {
        node: ['sequence_design', 'AuNPs_synthesis', 'probe-conjugated_AuNPs', 'probe-conjugated_AuNPs_detection'],
        line: ['line1', 'line2', 'line3', 'line4', 'line5', 'line6', 'line30'],
        color: "#000000",
    },
    'C': {
        node: ['sequence_design', 'cloning', 'PCR', 'repeated_insert_sequence_synthesis', 'preparation_of_templet_for_AELA-PCR', 'AELA_PCR', 'probe-conjugated_AuNPs_detection'],
        line: ['line1', 'line28', 'line7', 'line8', 'line12', 'line13', 'line14', 'line15', 'line16', 'line29'],
        color: "#000000",
    },
    'D': {
        node: ['sequence_design', 'cloning', 'PCR', 'IVT', 'circularization', 'circRNA_enrichment', 'RCA', 'probe-conjugated_AuNPs_detection'],

        line: ['line1', 'line28', 'line7', 'line8', 'line9', 'line10', 'line11', 'line17', 'line18', 'line21'],
        color: "#000000",
    },
    'E': {
        node: ['sequence_design', 'cloning', 'PCR', 'RPA', 'PCRD'],
        line: ['line1', 'line28', 'line7', 'line8', 'line9', 'line25', 'line26', 'line27'],
        color: "#000000",
    },
    'F': {
        node: ['sequence_design', 'cloning', 'PCR', 'IVT', 'RT-RPA', 'PCRD'],
        line: ['line1', 'line28', 'line7', 'line8', 'line9', 'line23', 'line24', 'line22'],
        color: "#000000",
    },
    'G': {
        node: ['sequence_design', 'cloning', 'PCR', 'IVT', 'circularization', 'circRNA_enrichment', 'RT-RPA', 'PCRD'],
        line: ['line1', 'line28', 'line7', 'line8', 'line9', 'line10', 'line11', 'line17', 'line19', 'line20', 'line22'],
        color: "#000000",
    },
}
const highlight = {
    'line1': ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    'line2': ['B'],
    'line3': ['B'],
    'line4': ['B'],
    'line5': ['B'],
    'line6': ['B'],
    'line7': ['A', 'C', 'D', 'E', 'F', 'G'],
    'line8': ['A', 'C', 'D', 'E', 'F', 'G'],
    'line9': ['A', 'D', 'F', 'G'],
    'line10': ['A', 'D', 'G'],
    'line11': ['A', 'D', 'G'],
    'line12': ['C'],
    'line13': ['C'],
    'line14': ['C'],
    'line15': ['C'],
    'line16': ['C'],
    'line17': ['D', 'G'],
    'line18': ['D'],
    'line19': ['G'],
    'line20': ['G'],
    'line21': ['D'],
    'line22': ['F', 'G'],
    'line23': ['F'],
    'line24': ['F'],
    'line25': ['E'],
    'line26': ['E'],
    'line27': ['E'],
    'line28': ['A', 'C', 'D', 'E', 'F', 'G'],
    'line29': ['C'],
    'line30': ['B'],
    'sequence_design': ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    'AuNPs_synthesis': ['B'],
    'probe-conjugated_AuNPs': ['B'],
    'IVT': ['A', 'F', 'D', 'G'],
    'circularization': ['A', 'D', 'G'],
    'circRNA_enrichment': ['A', 'D', 'G'],
    'RPA': ['E'],
    'AELA_PCR': ['C'],
    'RCA': ['D'],
    'probe-conjugated_AuNPs_detection': ['B', 'C', 'D'],
    'RT-RPA': ['F', 'G'],
    'PCRD': ['E', 'F', 'G'],
    'repeated_insert_sequence_synthesis': ['C'],
    'preparation_of_templet_for_AELA-PCR': ['C'],
    'cloning': ['A', 'C', 'D', 'E', 'F', 'G'],
    'PCR': ['A', 'C', 'D', 'E', 'F', 'G']
}

function addBorder(id) {
    if (id == 'A' || id == 'B' || id == 'C' || id == 'D' || id == 'E' || id == 'F' || id == 'G') {
        line[id].node.forEach(element => {
            document.getElementById(element).style.borderColor = "#A561D2";
                        document.getElementById(element).style.backgroundColor = "#A561D2";
            // document.getElementById(element).setAttribute('src', element+'-1.png')
        });
        line[id].line.forEach(element => {
            document.getElementById(element).style.borderColor = "#CEBAED";
            // document.getElementById(element).style.borderColor = "#B4C7E7";
            // document.getElementById(element).setAttribute('stroke', "#B4C7E7")
        })
    } else {
        if (highlight[id].length > 1) {
            highlight[id].forEach(l => {
                line[l].node.forEach(element => {
                    document.getElementById(element).style.borderColor = "#A561D2";
                    // document.getElementById(element).setAttribute('src', element+'-1.png')
                });
                line[l].line.forEach(element => {
                    document.getElementById(element).style.borderColor = "#CEBAED";
                    // document.getElementById(element).style.borderColor = "#B4C7E7";
                    // document.getElementById(element).setAttribute('stroke', "#B4C7E7")
                })
            });
        } else {
            line[highlight[id][0]].node.forEach(element => {
                document.getElementById(element).style.borderColor = "#A561D2";
                            document.getElementById(element).style.backgroundColor = "#A561D2";
                // document.getElementById(element).setAttribute('src', element+'-2.png')
            });
            line[highlight[id][0]].line.forEach(element => {
                document.getElementById(element).style.borderColor = "#CEBAED";
                // document.getElementById(element).setAttribute('stroke', "#4472C4")
                // document.getElementById(element).setAttribute('src', element+'-2.png')
            });
        }
    }                
}
function removeBorder(id) {
    if (id == 'A' || id == 'B' || id == 'C' || id == 'D' || id == 'E' || id == 'F' || id == 'G') {
        line[id].node.forEach(element => {
            document.getElementById(element).style.borderColor = "#CEBAED";
                        document.getElementById(element).style.backgroundColor = "#FFFFFF";
            // document.getElementById(element).setAttribute('src', element+'.png')
        });
        line[id].line.forEach(element => {
            document.getElementById(element).style.borderColor = "#000000";
            // document.getElementById(element).setAttribute('stroke', "black")
            // document.getElementById(element).setAttribute('src', element+'.png')
        });
    } else {
        highlight[id].forEach(l => {
            line[l].node.forEach(element => {
                document.getElementById(element).style.borderColor = "#CEBAED";
                            document.getElementById(element).style.backgroundColor = "#FFFFFF";
                // document.getElementById(element).setAttribute('src', element+'.png')
            });
            line[l].line.forEach(element => {
                document.getElementById(element).style.borderColor = "#000000";
                // document.getElementById(element).setAttribute('stroke', "black")
                // document.getElementById(element).setAttribute('src', element+'.png')
            });
        });
    }
}

const name = document.querySelector(".name")
        
function changeColor(color) {
    // code 
    name.style.color = color;
}

$(document).ready(function() {
    $('.flowchart-element').each(function() {
        var element = $(this);
        var textHeight = element.find('p').outerHeight();
        var textWidth = element.find('p').outerWidth()+50;
        element.css('min-height', textHeight + 'px');
        element.css('min-width', textWidth + 'px');
    });
});