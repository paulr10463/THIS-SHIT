package com.pechakuchas2.core.models;

import java.util.List;
import javax.annotation.PostConstruct;
import javax.inject.Inject;

import org.apache.sling.api.SlingHttpServletRequest;
import com.adobe.cq.export.json.ComponentExporter;
import org.apache.sling.models.annotations.Exporter;
import com.adobe.cq.export.json.ExporterConstants;

import lombok.Getter;

import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;


@Model(adaptables = SlingHttpServletRequest.class,
        adapters = {ComponentExporter.class},
        resourceType = BasicModel.RESOURCE_TYPE)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class BasicModel implements ComponentExporter {
    protected static final String RESOURCE_TYPE = "pechakucha2-react/components/basic-component";

    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    @Getter
    protected String text;

    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    @Getter
    protected String longText;

    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    @Getter
    protected Boolean checkbox;

    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    @Getter
    protected String url;

    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    @Getter
    protected String select;

    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    @Getter
    protected String fileReference;
    
    @ValueMapValue(injectionStrategy=InjectionStrategy.OPTIONAL)
    @Getter
    protected int number;
    
    @Inject
    @Via("resource")
    @Getter
    public List<NavItemModel> customnav;


    public String getExportedType() {
        return RESOURCE_TYPE;
    }

}
