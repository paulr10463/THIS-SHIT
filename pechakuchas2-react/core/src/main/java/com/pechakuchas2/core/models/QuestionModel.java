package com.pechakuchas2.core.models;

import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import com.adobe.cq.export.json.ComponentExporter;

import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import com.adobe.cq.export.json.ExporterConstants;

import lombok.Getter;
import lombok.Setter;

import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ChildResource;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Getter
@Model(adaptables = SlingHttpServletRequest.class,
        adapters = {ComponentExporter.class},
        resourceType = QuestionModel.RESOURCE_TYPE,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class QuestionModel implements ComponentExporter {
    protected static final String RESOURCE_TYPE = "pechakuchas2-react/components/question";

    @ValueMapValue
    protected String title;

    @ValueMapValue
    protected String question;

    @ValueMapValue
    protected String explanation;

    @ValueMapValue
    protected String correctOptionId;

    @ChildResource(name = "optionsList")
    @Getter
    @Setter
    public List<QuestionOption> optionsList;

    public String getExportedType() {
        return RESOURCE_TYPE;
    }
}
